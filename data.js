// 스파클 가사 데이터
const sparkleLyrics = {
    // 현재 선택된 음역 (tenor 또는 alto)
    currentVoice: 'tenor',
    
    // 테너 가사 데이터
    tenor: {
        // 원문 가사 (문장 단위)
        original: [
            "타가이노 스나도케이 나가메나가라 키스오 시요오요",
            "사요나라 카라 이치반 토오이 바쇼데 마치아와세요",
            "지쇼니 아루코토바데 데키아갓타 세타이오니쿤다",
            "만게쿄노나카데 하치가츠노아루아사",
            "키미와 보쿠노마에데 하니칸데와 스마시테 미세타",
            "코노 세카이노 쿄카쇼 노 요나 에가오데",
            "우소미타이나 히비오 키카쿠가이노 이미오",
            "히게키닷테 이이카라 노존다요",
            "소시타라 도아노 소토니 키미가 젠부 카카에테 탓테타요",
            "우운메이다토카 미라이토캇테 코토바가 도레다케 테오",
            "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루",
            "토케이노 하리모 후타리오 요코메니 미나가라 스스무",
            "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코",
            "이츠카키에테 나쿠나루 키미노 스베테오",
            "코노메니야키츠케테 모켄리 난카쟈나이 기무다토 오모우운다",
            "우운메이다토카 미라이토캇테 코토바가 도레다케 테오",
            "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루",
            "토케이노 하리모 후타리오 요코메니 미나가라 스스무",
            "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코"
        ],
        
        // 문장별 해석
        sentences: [
            "서로의 모래시계를 바라보며 키스하자",
            "\"안녕\"에서 가장 먼 곳에서 만나자",
            "사전에 실린 말들로 만들어져있는 세계를 미워했어",
            "만화경 속에서 8월의 어느 아침",
            "너는 나 앞에서 수줍어하며 새침을 떨었지",
            "이 세계의 교과서 같은 미소를 지으며",
            "거짓말 같은 나날을 규격 외의 의미를",
            "비극이라도 좋으니 바란거야",
            "그랬더니 문 밖에 너가 전부 껴안고 서있었어",
            "운명이라든가 미래라든가 하는 단어들이",
            "닿지않는곳에서 우리는 사랑을 하는거야",
            "시계바늘도 우리 둘을 흘끗 보며 나아가지",
            "그런 세계를 평생, 아니 언제까지나 계속 함께하는거야",
            "언젠가 사라져버릴 너의 모든 것을",
            "이 눈에 새겨두는것은 더는 권리가 아닌 의무라고 생각해",
            "운명이라든가 미래라든가 하는 단어들이",
            "닿지않는곳에서 우리는 사랑을 하는거야",
            "시계바늘도 우리 둘을 흘끗 보며 나아가지",
            "그런 세계를 평생, 아니 언제까지나 계속 함께하는거야"
        ],
        
        // 단어별 분해 및 한국어 해석 (21개 문장에 맞춤)
        words: [
            // 첫 번째 문장: "타가이노 스나도케이 나가메나가라 키스오 시요오요"
            [
                { japanese: "타가이노", korean: "서로의", pronunciation: "타가이노" },
                { japanese: "스나도케이", korean: "모래시계를", pronunciation: "스나도케이" },
                { japanese: "나가메나가라", korean: "바라보며", pronunciation: "나가메나가라" },
                { japanese: "키스오", korean: "키스를", pronunciation: "키스오" },
                { japanese: "시요오요", korean: "하자", pronunciation: "시요오요" }
            ],
            // 두 번째 문장: "사요나라 카라 이치반 토오이 바쇼데 마치아와세요"
            [
                { japanese: "사요나라", korean: "\"안녕\"에서", pronunciation: "사요나라" },
                { japanese: "카라", korean: "가장", pronunciation: "카라" },
                { japanese: "이치반", korean: "먼", pronunciation: "이치반" },
                { japanese: "토오이", korean: "곳에서", pronunciation: "토오이" },
                { japanese: "바쇼데 마치아와세요", korean: "만나자", pronunciation: "바쇼데 마치아와세요" }
            ],
            // 세 번째 문장: "지쇼니 아루코토바데 데키아갓타 세타이오니쿤다"
            [
                { japanese: "지쇼니", korean: "사전에", pronunciation: "지쇼니" },
                { japanese: "아루코토바데", korean: "실린 말들로", pronunciation: "아루코토바데" },
                { japanese: "데키아갓타", korean: "만들어져있는", pronunciation: "데키아갓타" },
                { japanese: "세타이오니쿤다", korean: "세계를 미워했어", pronunciation: "세타이오니쿤다" }
            ],
            // 네 번째 문장: "만게쿄노나카데 하치가츠노아루아사"
            [
                { japanese: "만게쿄", korean: "만화경", pronunciation: "만게쿄" },
                { japanese: "노나카데", korean: "속에서", pronunciation: "노나카데" },
                { japanese: "하치가츠", korean: "8월의", pronunciation: "하치가츠" },
                { japanese: "노아루아사", korean: "어느 아침", pronunciation: "노아루아사" }
            ],
            // 다섯 번째 문장: "키미와 보쿠노마에데 하니칸데와 스마시테 미세타"
            [
                { japanese: "키미와", korean: "너는", pronunciation: "키미와" },
                { japanese: "보쿠노", korean: "내", pronunciation: "보쿠노" },
                { japanese: "마에데", korean: "앞에서", pronunciation: "마에데" },
                { japanese: "하니칸데와", korean: "수줍어하곤 새침을", pronunciation: "하니칸데와" },
                { japanese: "스마시테", korean: "", pronunciation: "스마시테" },
                { japanese: "미세타", korean: "떨었지", pronunciation: "미세타" }
            ],
            // 여섯 번째 문장: "코노 세카이노 쿄카쇼 노 요나 에가오데"
            [
                { japanese: "코노", korean: "이", pronunciation: "코노" },
                { japanese: "세카이노", korean: "세계의", pronunciation: "세카이노" },
                { japanese: "쿄카쇼", korean: "교과서", pronunciation: "쿄카쇼" },
                { japanese: "노 요나", korean: "같은", pronunciation: "노 요나" },
                { japanese: "에가오데", korean: "미소를 지으며", pronunciation: "에가오데" }
            ],
            // 일곱 번째 문장: "우소미타이나 히비오 키카쿠가이노 이미오"
            [
                { japanese: "우소미타이", korean: "거짓말같은", pronunciation: "우소미타이" },
                { japanese: "나", korean: "나날을", pronunciation: "나" },
                { japanese: "히비오", korean: "규격", pronunciation: "히비오" },
                { japanese: "키카쿠", korean: "외의", pronunciation: "키카쿠" },
                { japanese: "가이노 이미오", korean: "의미를", pronunciation: "가이노 이미오" }
            ],
            // 여덟 번째 문장: "히게키닷테 이이카라 노존다요"
            [
                { japanese: "히게키닷테", korean: "비극이라도", pronunciation: "히게키닷테" },
                { japanese: "이이카라", korean: "좋으니", pronunciation: "이이카라" },
                { japanese: "노존다요", korean: "바란거야", pronunciation: "노존다요" }
            ],
            // 아홉 번째 문장: "소시타라 도아노 소토니 키미가 젠부 카카에테 탓테타요"
            [
                { japanese: "소시타라", korean: "그랬더니", pronunciation: "소시타라" },
                { japanese: "도아노", korean: "문", pronunciation: "도아노" },
                { japanese: "소토니", korean: "밖에", pronunciation: "소토니" },
                { japanese: "키미가", korean: "너가", pronunciation: "키미가" },
                { japanese: "젠부", korean: "전부", pronunciation: "젠부" },
                { japanese: "카카에테", korean: "껴안고", pronunciation: "카카에테" },
                { japanese: "탓테타요", korean: "서있었어", pronunciation: "탓테타요" }
            ],
            // 열 번째 문장: "우운메이다토카 미라이토캇테 코토바가 도레다케 테오"
            [
                { japanese: "우운메이다토카", korean: "운명이라든가", pronunciation: "우운메이다토카" },
                { japanese: "미라이토캇테", korean: "미래라든가 하는", pronunciation: "미라이토캇테" },
                { japanese: "코토바가", korean: "단어들이", pronunciation: "코토바가" },
                { japanese: "도레다케 테오", korean: "붙잡아 두고 싶어서, 손을", pronunciation: "도레다케 테오" }
            ],
            // 열두 번째 문장: "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루"
            [
                { japanese: "노바소오토", korean: "손을", pronunciation: "노바소오토" },
                { japanese: "토도카나이 바쇼데", korean: "닿지않는곳에서", pronunciation: "토도카나이 바쇼데" },
                { japanese: "보쿠라", korean: "우리는", pronunciation: "보쿠라" },
                { japanese: "코이오", korean: "사랑을", pronunciation: "코이오" },
                { japanese: "스루", korean: "하는거야", pronunciation: "스루" }
            ],
            // 열세 번째 문장: "토케이노 하리모 후타리오 요코메니 미나가라 스스무"
            [
                { japanese: "토케이노 하리모", korean: "시계바늘도", pronunciation: "토케이노 하리모" },
                { japanese: "후타리오", korean: "우리 둘을", pronunciation: "후타리오" },
                { japanese: "요코메니", korean: "흘끗", pronunciation: "요코메니" },
                { japanese: "미나가라", korean: "보며", pronunciation: "미나가라" },
                { japanese: "스스무", korean: "나아가지", pronunciation: "스스무" }
            ],
            // 열네 번째 문장: "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코"
            [
                { japanese: "손나", korean: "그런", pronunciation: "손나" },
                { japanese: "세카리오", korean: "세계를", pronunciation: "세카리오" },
                { japanese: "후타리데", korean: "평생,", pronunciation: "후타리데" },
                { japanese: "잇쇼이야", korean: "한 평생, 아니", pronunciation: "잇쇼이야" },
                { japanese: "난쇼데모", korean: "몇 번의 생이라도", pronunciation: "난쇼데모" },
                { japanese: "이키누이데 유코", korean: "계속 함께하는거야", pronunciation: "이키누이데 유코" }
            ],
            // 열다섯 번째 문장: "이츠카키에테 나쿠나루 키미노 스베테오"
            [
                { japanese: "이츠카키에테", korean: "언젠가", pronunciation: "이츠카키에테" },
                { japanese: "나쿠나루", korean: "사라져버릴", pronunciation: "나쿠나루" },
                { japanese: "키미노", korean: "너의", pronunciation: "키미노" },
                { japanese: "스베테오", korean: "모든 것을", pronunciation: "스베테오" }
            ],
            // 열여섯 번째 문장: "코노메니야키츠케테 모켄리 난카쟈나이 기무다토 오모우운다"
            [
                { japanese: "코노메니", korean: "이 눈에", pronunciation: "코노메니" },
                { japanese: "야키츠케테", korean: "새겨 두다, 불에 그을리듯 강하게 각인하다", pronunciation: "야키츠케테" },
                { japanese: "모켄리", korean: "더는 권리", pronunciation: "모켄리" },
                { japanese: "난카쟈나이", korean: "그런 게 아니다 / 단순한 게 아니다", pronunciation: "난카쟈나이" },
                { japanese: "기무다토 오모우운다", korean: "의무라고 생각해", pronunciation: "기무다토 오모우운다" }
            ],
            // 열일곱 번째 문장: "우운메이다토카 미라이토캇테 코토바가 도레다케 테오" (반복)
            [
                { japanese: "우운메이다토카", korean: "운명이라든가", pronunciation: "우운메이다토카" },
                { japanese: "미라이토캇테", korean: "미래라든가 하는", pronunciation: "미라이토캇테" },
                { japanese: "코토바가", korean: "단어들이", pronunciation: "코토바가" },
                { japanese: "도레다케 테오", korean: "", pronunciation: "도레다케 테오" }
            ],
            // 열여덟 번째 문장: "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루" (반복)
            [
                { japanese: "노바소오토", korean: "손을", pronunciation: "노바소오토" },
                { japanese: "토도카나이 바쇼데", korean: "닿지않는곳에서", pronunciation: "토도카나이 바쇼데" },
                { japanese: "보쿠라", korean: "우리는", pronunciation: "보쿠라" },
                { japanese: "코이오", korean: "사랑을", pronunciation: "코이오" },
                { japanese: "스루", korean: "하는거야", pronunciation: "스루" }
            ],
            // 열아홉 번째 문장: "토케이노 하리모 후타리오 요코메니 미나가라 스스무" (반복)
            [
                { japanese: "토케이노 하리모", korean: "시계바늘도", pronunciation: "토케이노 하리모" },
                { japanese: "후타리오", korean: "우리 둘을", pronunciation: "후타리오" },
                { japanese: "요코메니", korean: "흘끗", pronunciation: "요코메니" },
                { japanese: "미나가라", korean: "보며", pronunciation: "미나가라" },
                { japanese: "스스무", korean: "나아가지", pronunciation: "스스무" }
            ],
            // 스무한 번째 문장: "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코" (반복)
            [
                { japanese: "손나", korean: "그런", pronunciation: "손나" },
                { japanese: "세카리오", korean: "세계를", pronunciation: "세카리오" },
                { japanese: "후타리데", korean: "평생,", pronunciation: "후타리데" },
                { japanese: "잇쇼이야", korean: "한 평생, 아니", pronunciation: "잇쇼이야" },
                { japanese: "난쇼데모", korean: "몇 번의 생이라도", pronunciation: "난쇼데모" },
                { japanese: "이키누이데 유코", korean: "끝까지 살아가자", pronunciation: "이키누이데 유코" }
            ]
        ]
    },
    
    // 알토 가사 데이터
    alto: {
        // 원문 가사 (문장 단위)
        original: [
            "마다코노 세카이와",
            "보쿠오카이 나라 시테타이 마타이 다",
            "노조미도 리이이 다로",
            "우츠쿠시쿠 모가쿠요",
            "키미와 보쿠노마에데 이치파츠데와 스마시테미루 코노세카이노 치카라모 카쓰 노요 나에가도데",
            "우소미타이 나히 비노 카가 쿠가이 노이미오 히게키닷 테이 가라노론 다도 소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토",
            "우운메이다토카 미라이토캇테 코토바가 도레다케 테오",
            "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루",
            "토케이노 하리모 후타리오 요코메니 미나가라 스스무",
            "손나 세카리오 후타리데 잇쇼이야 난쇼데모",
            "이키누이데 유코",
            "이츠카키에테 나쿠나루 키미노 스베테오",
            "코노메니야키츠케테 모켄리 난카쟈나이 기무다토 오모우운다",
            "우운메이다토카 미라이토캇테 코토바가 도레다케 테오",
            "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루",
            "토케이노 하리모 후타리오 요코메니 미나가라 스스무",
            "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코"
        ],
        
        // 문장별 해석
        sentences: [
            "아직 이 세상은",
<<<<<<< HEAD
            "나를 붙잡아 두고 싶어",
            "원하는대로",
            "아름답게 몸부림칠거야",
            "너는 내 앞에서 한 번으로는 스마일을 해볼게 이 세상의 모든 힘도 내게 힘이 되어 정말이야 나에게도",
            "거짓말하고 싶어 하고 싶어 나비 비의 향기 향기를 비겁한 손으로 잡았어 그러자 문 밖에 네가 모든 것을 안고 서 있었어",
            "운명이라든가 미래라든가 하는 단어들이",
            "닿지않는곳에서 우리는 사랑을 하는거야",
            "시계바늘도 우리 둘을 흘끗 보며 나아가지",
            "그런 세계를 평생, 한 평생, 아니 몇 번의 생이라도",
            "계속 함께하는거야",
            "언젠가 사라져버릴 너의 모든 것을",
            "이 눈에 새겨두는것은 더는 권리가 아닌 의무라고 생각해",
            "운명이라든가 미래라든가 하는 단어들이",
            "닿지않는곳에서 우리는 사랑을 하는거야",
            "시계바늘도 우리 둘을 흘끗 보며 나아가지",
            "그런 세계를 평생, 한 평생, 아니 몇 번의 생이라도 끝까지 살아가자"
        ],
        
        // 단어별 분해 및 한국어 해석 (알토 버전)
        words: [
            // 첫 번째 문장: "마다 코노 세카이와"
            [
                { japanese: "마다", korean: "아직", pronunciation: "마다" },
                { japanese: "코노", korean: "이", pronunciation: "코노" },
                { japanese: "세카이와", korean: "세상은", pronunciation: "세카이와" }
            ],
            // 두 번째 문장: "보쿠오 카이나라 시테타이 미타이다"
            [
                { japanese: "보쿠오", korean: "나를", pronunciation: "보쿠오" },
                { japanese: "카이 나라", korean: "붙잡아 두고", pronunciation: "카이 나라" },
                { japanese: "시테이타이", korean: "싶어", pronunciation: "시테이타이" },
                { japanese: "미타이다", korean: "모양이야", pronunciation: "미타이다" }
            ],
            // 세 번째 문장: "노조미도리 이이다로"
            [
                { japanese: "노조미도리", korean: "원하는대로", pronunciation: "노조미도리" },
                { japanese: "이이다로", korean: "해", pronunciation: "이이다로" }
            ],
            // 네 번째 문장: "우츠쿠시쿠 모가쿠요"
            [
                { japanese: "우츠쿠시쿠", korean: "아름답게", pronunciation: "우츠쿠시쿠" },
                { japanese: "모가쿠요", korean: "몸부림칠거야", pronunciation: "모가쿠요" }
            ],
            // 다섯 번째 문장: "키미와 보쿠노마에데 이치파츠데와 스마시테미루 코노세카이노 치카라모 카쓰 노요 나에가도데"
            [
                { japanese: "키미와", korean: "너는", pronunciation: "키미와" },
                { japanese: "보쿠노마에데", korean: "내 앞에서", pronunciation: "보쿠노마에데" },
                { japanese: "이치파츠데와", korean: "한 번으로는", pronunciation: "이치파츠데와" },
                { japanese: "스마시테미루", korean: "스마일을 해볼게", pronunciation: "스마시테미루" },
                { japanese: "코노세카이노", korean: "이 세상의", pronunciation: "코노세카이노" },
                { japanese: "치카라모", korean: "모든 힘도", pronunciation: "치카라모" },
                { japanese: "카쓰", korean: "내게 힘이 되어", pronunciation: "카쓰" },
                { japanese: "노요", korean: "정말이야", pronunciation: "노요" },
                { japanese: "나에가도데", korean: "나에게도", pronunciation: "나에가도데" }
            ],
            // 여섯 번째 문장: "우소미타이 나히 비노 카가 쿠가이 노이미오 히게키닷 테이 가라노론 다도 소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토"
            [
                { japanese: "우소미타이", korean: "거짓말하고 싶어", pronunciation: "우소미타이" },
                { japanese: "나히", korean: "하고 싶어", pronunciation: "나히" },
                { japanese: "비노", korean: "나비", pronunciation: "비노" },
                { japanese: "카가", korean: "비의", pronunciation: "카가" },
                { japanese: "쿠가이", korean: "향기", pronunciation: "쿠가이" },
                { japanese: "노이미오", korean: "향기를", pronunciation: "노이미오" },
                { japanese: "히게키닷", korean: "비겁한", pronunciation: "히게키닷" },
                { japanese: "테이", korean: "손", pronunciation: "테이" },
                { japanese: "가라노론", korean: "으로", pronunciation: "가라노론" },
                { japanese: "다도", korean: "잡았어", pronunciation: "다도" },
                { japanese: "소시타라", korean: "그러자", pronunciation: "소시타라" },
                { japanese: "도아노", korean: "문", pronunciation: "도아노" },
                { japanese: "소토니", korean: "밖에", pronunciation: "소토니" },
                { japanese: "카미가젠", korean: "네가", pronunciation: "카미가젠" },
                { japanese: "부카카", korean: "모든", pronunciation: "부카카" },
                { japanese: "에테팟", korean: "것을", pronunciation: "에테팟" },
                { japanese: "데라토", korean: "안고 서 있었어", pronunciation: "데라토" }
            ],
            // 일곱 번째 문장: "우운메이다토카 미라이토캇테 코토바가 도레다케 테오"
            [
                { japanese: "우운메이다토카", korean: "운명이라든가", pronunciation: "우운메이다토카" },
                { japanese: "미라이토캇테", korean: "미래라든가 하는", pronunciation: "미라이토캇테" },
                { japanese: "코토바가", korean: "단어들이", pronunciation: "코토바가" },
                { japanese: "도레다케 테오", korean: "", pronunciation: "도레다케 테오" }
            ],
            // 여덟 번째 문장: "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루"
            [
                { japanese: "노바소오토", korean: "손을 뻗어도", pronunciation: "노바소오토" },
                { japanese: "토도카나이", korean: "닿지 않는", pronunciation: "토도카나이" },
                { japanese: "바쇼데", korean: "곳에서", pronunciation: "바쇼데" },
                { japanese: "보쿠라", korean: "우리는", pronunciation: "보쿠라" },
                { japanese: "코이오 스루", korean: "사랑을 하는거야", pronunciation: "코이오 스루" }
            ],
            // 아홉 번째 문장: "토케이노 하리모 후타리오 요코메니 미나가라 스스무"
            [
                { japanese: "토케이노", korean: "시계의", pronunciation: "토케이노" },
                { japanese: "하리모", korean: "바늘도", pronunciation: "하리모" },
                { japanese: "후타리오", korean: "우리 둘을", pronunciation: "후타리오" },
                { japanese: "요코메니", korean: "흘끗", pronunciation: "요코메니" },
                { japanese: "미나가라", korean: "보며", pronunciation: "미나가라" },
                { japanese: "스스무", korean: "나아가지", pronunciation: "스스무" }
            ],
            // 열 번째 문장: "손나 세카리오 후타리데 잇쇼이야 난쇼데모"
            [
                { japanese: "손나", korean: "그런", pronunciation: "손나" },
                { japanese: "세카리오", korean: "세계를", pronunciation: "세카리오" },
                { japanese: "후타리데", korean: "두 사람이", pronunciation: "후타리데" },
                { japanese: "잇쇼이야", korean: "한 평생", pronunciation: "잇쇼이야" },
                { japanese: "난쇼데모", korean: "몇 생이라도", pronunciation: "난쇼데모" }
            ],
            // 열한 번째 문장: "이키누이데 유코"
            [
                { japanese: "이키누이데", korean: "끝까지 살아가서", pronunciation: "이키누이데" },
                { japanese: "유코", korean: "함께 가자", pronunciation: "유코" }
            ],
            // 열한 번째 문장: "이츠카키에테 나쿠나루 키미노 스베테오"
            [
                { japanese: "이츠카", korean: "언젠가", pronunciation: "이츠카" },
                { japanese: "키에테", korean: "사라져버릴", pronunciation: "키에테" },
                { japanese: "나쿠나루", korean: "사라져버릴", pronunciation: "나쿠나루" },
                { japanese: "키미노", korean: "너의", pronunciation: "키미노" },
                { japanese: "스베테오", korean: "모든 것을", pronunciation: "스베테오" }
            ],
            // 열두 번째 문장: "코노메니야키츠케테 모켄리 난카쟈나이 기무다토 오모우운다"
            [
                { japanese: "코노메니", korean: "이 눈에", pronunciation: "코노메니" },
                { japanese: "야키츠케테", korean: "새겨두는것은", pronunciation: "야키츠케테" },
                { japanese: "모켄리", korean: "더는 권리가", pronunciation: "모켄리" },
                { japanese: "난카쟈나이", korean: "아닌", pronunciation: "난카쟈나이" },
                { japanese: "기무다토", korean: "의무라고", pronunciation: "기무다토" },
                { japanese: "오모우운다", korean: "생각해", pronunciation: "오모우운다" }
            ],
            // 열세 번째 문장: "우운메이다토카 미라이토캇테 코토바가 도레다케 테오" (반복)
            [
                { japanese: "우운메이다토카", korean: "운명이라든가", pronunciation: "우운메이다토카" },
                { japanese: "미라이토캇테", korean: "미래라든가 하는", pronunciation: "미라이토캇테" },
                { japanese: "코토바가", korean: "단어들이", pronunciation: "코토바가" },
                { japanese: "도레다케 테오", korean: "", pronunciation: "도레다케 테오" }
            ],
            // 열네 번째 문장: "노바소오토 토도카나이 바쇼데 보쿠라 코이오 스루" (반복)
            [
                { japanese: "노바소오토", korean: "손을 뻗어도", pronunciation: "노바소오토" },
                { japanese: "토도카나이", korean: "닿지 않는", pronunciation: "토도카나이" },
                { japanese: "바쇼데", korean: "곳에서", pronunciation: "바쇼데" },
                { japanese: "보쿠라", korean: "우리는", pronunciation: "보쿠라" },
                { japanese: "코이오 스루", korean: "사랑을 하는거야", pronunciation: "코이오 스루" }
            ],
            // 열다섯 번째 문장: "토케이노 하리모 후타리오 요코메니 미나가라 스스무" (반복)
            [
                { japanese: "토케이노", korean: "시계의", pronunciation: "토케이노" },
                { japanese: "하리모", korean: "바늘도", pronunciation: "하리모" },
                { japanese: "후타리오", korean: "우리 둘을", pronunciation: "후타리오" },
                { japanese: "요코메니", korean: "흘끗", pronunciation: "요코메니" },
                { japanese: "미나가라", korean: "보며", pronunciation: "미나가라" },
                { japanese: "스스무", korean: "나아가지", pronunciation: "스스무" }
            ],
            // 열여섯 번째 문장: "손나 세카리오 후타리데 잇쇼이야 난쇼데모 이키누이데 유코" (반복)
            [
                { japanese: "손나", korean: "그런", pronunciation: "손나" },
                { japanese: "세카리오", korean: "세계를", pronunciation: "세카리오" },
                { japanese: "후타리데", korean: "두 사람이", pronunciation: "후타리데" },
                { japanese: "잇쇼이야", korean: "한 평생", pronunciation: "잇쇼이야" },
                { japanese: "난쇼데모", korean: "몇 생이라도", pronunciation: "난쇼데모" },
                { japanese: "이키누이데", korean: "끝까지 살아가서", pronunciation: "이키누이데" },
                { japanese: "유코", korean: "함께 가자", pronunciation: "유코" }
            ]
        ]
    },
    
    // 현재 선택된 음역의 데이터를 반환하는 헬퍼 함수들
    get currentData() {
        return this[this.currentVoice];
    },
    
    get words() {
        return this.currentData.words;
    },
    
    get original() {
        return this.currentData.original;
    },
    
    get sentences() {
        return this.currentData.sentences;
    }
};
