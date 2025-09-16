# 스파클 가사 학습

일본어 가사 "스파클"을 학습하기 위한 웹 애플리케이션입니다.

## 📹 시현영상

<div align="center">

### 🎬 실제 사용 영상

![스파클 가사 학습 시현영상](assets/videos/test.MP4)

> **💡 실제 사용 영상**: [어텀의 블로그](https://blogautumn.tistory.com/34)에서 합창단에서 실제 사용하는 모습을 확인하실 수 있습니다

### 🚀 앱 체험하기

[![스파클 가사 학습](https://img.shields.io/badge/🚀_앱_체험하기-http://localhost:3000-blue?style=for-the-badge)](http://localhost:3000)

[![시현영상 보기](https://img.shields.io/badge/📹_시현영상_보기-demo.html-green?style=for-the-badge)](src/demo.html)

</div>

> 💡 **실행 방법**: `docker compose up --build` 명령어로 앱을 실행한 후 위 버튼을 클릭하세요.

## ✨ 주요 특징

- 🎨 **세련된 디자인**: 자연스럽고 아름다운 사용자 인터페이스
- 🎯 **직관적인 학습**: 일본어 발음 입력으로 한국어 해석 완성
- 📱 **반응형 디자인**: 모바일과 데스크톱 모두 지원
- 🚀 **Docker 기반**: 프로덕션 환경과 동일한 설정

## 🚀 빠른 시작

### Docker Compose로 실행

```bash
# 저장소 클론
git clone https://github.com/hyosang-seo/sparkle-learning-app.git
cd sparkle-learning-app

# Docker Compose 실행
docker compose up --build

# 브라우저에서 http://localhost:3000 접속
```

### 로컬 개발 서버로 실행

```bash
cd src
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 🎮 사용법

1. **발음 입력**: 빈칸에 일본어 발음을 입력하세요
2. **정답 확인**: 정답 시 한국어 해석이 나타납니다
3. **힌트 활용**: 틀렸을 때 힌트를 확인하세요
4. **문장 완성**: 모든 단어를 맞히면 문장별 해석으로 변경됩니다
5. **진행률 확인**: 상단의 진행률 바로 학습 진도를 확인하세요

## 📁 프로젝트 구조

```
sparkle/
├── docker-compose.yml    # Docker Compose 설정
├── Dockerfile            # Docker 이미지 빌드 설정
├── nginx.conf           # Nginx 웹서버 설정
├── assets/
│   └── videos/
│       └── sparkle.mp4  # 시현영상
└── src/                 # 소스 코드
    ├── index.html       # 메인 HTML
    ├── style.css        # 스타일시트
    ├── script.js        # JavaScript 로직
    └── data.js          # 가사 데이터
```

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Web Server**: Nginx Alpine
- **Containerization**: Docker, Docker Compose
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Font**: Pretendard (한국어 최적화)

## 🎨 디자인 특징

- **색상**: 부드러운 파스텔 톤과 그라데이션
- **타이포그래피**: 자연스러운 한국어 폰트 적용
- **애니메이션**: 부드럽고 자연스러운 전환 효과
- **반응형**: 모바일 우선 설계

## 📄 라이선스

MIT License