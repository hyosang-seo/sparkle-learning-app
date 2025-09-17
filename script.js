class SparkleLearningApp {
    constructor() {
        this.currentWordIndex = 0;
        this.totalWords = 0;
        this.correctAnswers = 0;
        this.currentLineIndex = 0;
        this.currentWordInLine = 0;
        this.isCompleted = false;
        this.completedSentences = new Set(); // 완성된 문장 추적
        
        this.initializeApp();
        this.bindEvents();
    }
    
    initializeApp() {
        // 총 단어 수 계산 (현재 선택된 음역에 따라)
        this.totalWords = sparkleLyrics.words.reduce((total, line) => total + line.length, 0);
        
        this.renderLyrics();
        this.updateProgress();
        this.showFeedback("스파클 가사 학습을 시작합니다! 첫 번째 단어의 발음을 입력해보세요.", "info");
    }
    
    bindEvents() {
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetApp();
        });
        
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.showHint();
        });
        
        // 음역 선택 버튼 이벤트
        document.getElementById('tenorBtn').addEventListener('click', () => {
            this.switchVoice('tenor');
        });
        
        document.getElementById('altoBtn').addEventListener('click', () => {
            this.switchVoice('alto');
        });
    }
    
    renderLyrics() {
        const container = document.getElementById('lyricsDisplay');
        container.innerHTML = '';
        
        sparkleLyrics.words.forEach((line, lineIndex) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'word-group';
            
            // 문장이 완성되었는지 확인
            const isSentenceCompleted = this.completedSentences.has(lineIndex);
            
            if (isSentenceCompleted) {
                // 문장이 완성된 경우 문장별 해석 표시
                lineDiv.innerHTML = `
                    <div class="sentence-completed">
                        <div class="japanese-sentence">${sparkleLyrics.original[lineIndex]}</div>
                        <div class="korean-sentence visible">${sparkleLyrics.sentences[lineIndex]}</div>
                    </div>
                `;
            } else {
                // 문장이 완성되지 않은 경우 단어별 표시
                line.forEach((word, wordIndex) => {
                    const wordDiv = document.createElement('div');
                    wordDiv.className = 'word-item';
                    
                    // 현재 입력해야 할 단어인지 확인
                    const isCurrentWord = lineIndex === this.currentLineIndex && wordIndex === this.currentWordInLine;
                    const isCompleted = this.isWordCompleted(lineIndex, wordIndex);
                    
                    if (isCurrentWord && !isCompleted) {
                        wordDiv.className += ' empty';
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.className = 'word-input';
                        input.placeholder = '발음 입력';
                        input.autocomplete = 'off';
                        input.dataset.lineIndex = lineIndex;
                        input.dataset.wordIndex = wordIndex;
                        input.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                this.checkWordInput(input);
                            }
                        });
                        input.addEventListener('blur', () => {
                            this.checkWordInput(input);
                        });
                        wordDiv.appendChild(input);
                    } else if (isCompleted) {
                        wordDiv.className += ' correct';
                        wordDiv.innerHTML = `
                            <div class="japanese-text">${word.japanese}</div>
                            <div class="korean-text visible">${word.korean}</div>
                        `;
                    } else {
                        // 현재 입력해야 할 단어인지 확인하여 발음 힌트 표시
                        const isCurrentWord = lineIndex === this.currentLineIndex && wordIndex === this.currentWordInLine;
                        const pronunciationHint = isCurrentWord ? `<div class="pronunciation-hint visible">${word.pronunciation}</div>` : `<div class="pronunciation-hint">${word.pronunciation}</div>`;
                        
                        wordDiv.innerHTML = `
                            <div class="japanese-text">${word.japanese}</div>
                            <div class="korean-text">${word.korean}</div>
                            ${pronunciationHint}
                        `;
                    }
                    
                    lineDiv.appendChild(wordDiv);
                });
            }
            
            container.appendChild(lineDiv);
        });
        
        // 첫 번째 입력 필드에 포커스
        setTimeout(() => {
            const firstInput = document.querySelector('.word-input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    }
    
    checkWordInput(input) {
        const userInput = input.value.trim().toLowerCase();
        const lineIndex = parseInt(input.dataset.lineIndex);
        const wordIndex = parseInt(input.dataset.wordIndex);
        const word = sparkleLyrics.words[lineIndex][wordIndex];
        const correctPronunciation = word.pronunciation.toLowerCase();
        
        if (!userInput) {
            this.showFeedback("발음을 입력해주세요!", "error");
            return;
        }
        
        // 정확한 발음인지 확인
        const isCorrect = this.checkSimilarity(userInput, correctPronunciation);
        
        if (isCorrect) {
            this.handleCorrectWordInput(input, word);
        } else {
            this.handleIncorrectWordInput(input, correctPronunciation);
        }
    }
    
    handleCorrectWordInput(input, word) {
        input.parentElement.className = 'word-item correct';
        input.parentElement.innerHTML = `
            <div class="japanese-text">${word.japanese}</div>
            <div class="korean-text visible">${word.korean}</div>
        `;
        
        this.correctAnswers++;
        this.showFeedback(`정답입니다! "${word.japanese}" = "${word.korean}"`, "success");
        
        // 다음 단어로 이동
        this.moveToNextWord();
        
        // 현재 문장이 완성되었는지 확인
        this.checkSentenceCompletion();
        
        // 완료 체크
        if (this.isCompleted) {
            this.showCompletionMessage();
        } else {
            this.renderLyrics();
            this.updateProgress();
        }
    }
    
    handleIncorrectWordInput(input, correctPronunciation) {
        this.showFeedback(`틀렸습니다! 힌트를 보여드릴게요`, "error");
        
        // 틀린 단어에 시각적 효과 추가
        input.parentElement.classList.add('incorrect');
        
        // 힌트 표시: 정답을 연하게 보여주기
        this.showHint(input, correctPronunciation);
        
        setTimeout(() => {
            input.parentElement.classList.remove('incorrect');
        }, 1000);
        
        // 입력 필드에 포커스 유지
        input.focus();
    }
    
    showHint(input, correctPronunciation) {
        const lineIndex = parseInt(input.dataset.lineIndex);
        const wordIndex = parseInt(input.dataset.wordIndex);
        const word = sparkleLyrics.words[lineIndex][wordIndex];
        
        // 힌트를 위한 임시 요소 생성
        const hintElement = document.createElement('div');
        hintElement.className = 'word-hint';
        hintElement.innerHTML = `
            <div class="hint-japanese">${word.japanese}</div>
            <div class="hint-korean">${word.korean}</div>
            <div class="hint-pronunciation">${correctPronunciation}</div>
        `;
        
        // 입력 필드 다음에 힌트 삽입
        input.parentElement.appendChild(hintElement);
        
        // 3초 후 힌트 제거
        setTimeout(() => {
            if (hintElement.parentElement) {
                hintElement.parentElement.removeChild(hintElement);
            }
        }, 3000);
    }
    
    isWordCompleted(lineIndex, wordIndex) {
        // 현재 단어보다 앞에 있는 단어들은 완료된 것으로 간주
        const currentPosition = this.getCurrentPosition();
        const targetPosition = this.getWordPosition(lineIndex, wordIndex);
        return targetPosition < currentPosition;
    }
    
    getCurrentPosition() {
        let position = 0;
        for (let i = 0; i < this.currentLineIndex; i++) {
            position += sparkleLyrics.words[i].length;
        }
        return position + this.currentWordInLine;
    }
    
    getWordPosition(lineIndex, wordIndex) {
        let position = 0;
        for (let i = 0; i < lineIndex; i++) {
            position += sparkleLyrics.words[i].length;
        }
        return position + wordIndex;
    }
    
    checkPronunciation() {
        const input = document.querySelector('.word-input');
        if (!input) {
            this.showFeedback("입력할 단어가 없습니다!", "error");
            return;
        }
        
        const userInput = input.value.trim().toLowerCase();
        
        if (!userInput) {
            this.showFeedback("발음을 입력해주세요!", "error");
            return;
        }
        
        const currentWord = this.getCurrentWord();
        const correctPronunciation = currentWord.pronunciation.toLowerCase();
        
        // 정확한 발음인지 확인 (유사도 체크)
        const isCorrect = this.checkSimilarity(userInput, correctPronunciation);
        
        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer(correctPronunciation);
        }
        
        input.value = '';
    }
    
    checkSimilarity(input, correct) {
        // 간단한 유사도 체크 (정확히 일치하거나 80% 이상 유사한 경우)
        if (input === correct) return true;
        
        // 편집 거리 기반 유사도 계산
        const similarity = this.calculateSimilarity(input, correct);
        return similarity >= 0.8;
    }
    
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }
    
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
    
    getCurrentWord() {
        return sparkleLyrics.words[this.currentLineIndex][this.currentWordInLine];
    }
    
    checkSentenceCompletion() {
        // 현재 문장의 모든 단어가 완성되었는지 확인
        const currentLine = sparkleLyrics.words[this.currentLineIndex];
        const isCurrentSentenceCompleted = this.currentWordInLine === 0 && this.currentLineIndex > 0;
        
        if (isCurrentSentenceCompleted) {
            // 이전 문장이 완성됨
            const completedSentenceIndex = this.currentLineIndex - 1;
            this.completedSentences.add(completedSentenceIndex);
            this.showFeedback(`🎉 문장 완성! "${sparkleLyrics.sentences[completedSentenceIndex]}"`, "success");
        }
    }
    
    moveToNextWord() {
        this.currentWordInLine++;
        
        // 현재 줄의 끝에 도달한 경우
        if (this.currentWordInLine >= sparkleLyrics.words[this.currentLineIndex].length) {
            this.currentLineIndex++;
            this.currentWordInLine = 0;
            
            // 모든 줄을 완료한 경우
            if (this.currentLineIndex >= sparkleLyrics.words.length) {
                this.isCompleted = true;
            }
        }
    }
    
    updateProgress() {
        const progress = (this.correctAnswers / this.totalWords) * 100;
        document.getElementById('progressText').textContent = `진행률: ${Math.round(progress)}%`;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }
    
    showFeedback(message, type) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = message;
        feedback.className = `feedback ${type}`;
        
        // 3초 후 메시지 지우기
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'feedback';
        }, 3000);
    }
    
    showHint() {
        const currentWord = this.getCurrentWord();
        this.showFeedback(`힌트: "${currentWord.pronunciation}"`, "info");
    }
    
    showCompletionMessage() {
        const container = document.getElementById('lyricsDisplay');
        container.innerHTML = `
            <div class="completion-message">
                <h2>🎉 축하합니다! 🎉</h2>
                <p>스파클 가사를 모두 완성했습니다!</p>
                <p>정답률: ${Math.round((this.correctAnswers / this.totalWords) * 100)}%</p>
                <button class="btn" onclick="app.resetApp()" style="margin-top: 20px;">다시 도전하기</button>
            </div>
        `;
        
        this.showFeedback("모든 가사를 완성했습니다! 🎊", "success");
    }
    
    switchVoice(voice) {
        // 음역 변경
        sparkleLyrics.currentVoice = voice;
        
        // 버튼 상태 업데이트
        document.querySelectorAll('.voice-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(voice + 'Btn').classList.add('active');
        
        // 앱 상태 초기화
        this.resetApp();
        
        // 피드백 메시지
        const voiceName = voice === 'tenor' ? '테너' : '알토';
        this.showFeedback(`${voiceName} 가사로 전환했습니다!`, "info");
    }
    
    resetApp() {
        this.currentWordIndex = 0;
        this.correctAnswers = 0;
        this.currentLineIndex = 0;
        this.currentWordInLine = 0;
        this.isCompleted = false;
        this.completedSentences.clear(); // 완성된 문장 초기화
        
        // 총 단어 수 재계산 (현재 음역에 따라)
        this.totalWords = sparkleLyrics.words.reduce((total, line) => total + line.length, 0);
        
        // 모든 입력 필드 초기화
        const inputs = document.querySelectorAll('.word-input');
        inputs.forEach(input => {
            input.value = '';
        });
        
        document.getElementById('feedback').textContent = '';
        document.getElementById('feedback').className = 'feedback';
        
        this.renderLyrics();
        this.updateProgress();
        this.showFeedback("학습을 다시 시작합니다!", "info");
    }
}

// 앱 초기화
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SparkleLearningApp();
});
