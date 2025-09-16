# ✨ 스파클 가사 학습기

일본어 가사 "스파클"을 학습하기 위한 웹 애플리케이션입니다.

## 🚀 실행 방법

1. Docker Desktop 실행
2. 다음 명령어 실행:
```bash
docker compose up --build
```
3. 브라우저에서 `http://localhost:3000` 접속

## 🎮 사용법

- 빈칸에 일본어 발음을 입력
- 정답 시 한국어 해석이 진해짐
- 틀렸을 때 힌트가 나타남
- 문장 완성 시 문장별 해석으로 변경

## 📁 구조

```
sparkle/
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
└── src/
    ├── index.html
    ├── style.css
    ├── script.js
    └── data.js
```

## 🛠 기술

- HTML5, CSS3, JavaScript
- Nginx, Docker Compose