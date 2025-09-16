// 스파클 가사 데이터
const sparkleLyrics = {
    // 원문 가사 (문장 단위)
    original: [
        "타가이노 스나도케이 나가메나가라 키스오 시요토",
        "사요나라 카라 이치반 토오이 바쇼데 마치아와세요",
        "지소니 아루 코토바데 데키아 갓타세카이 오니 큰다",
        "만고 노나카데 하치가츠 노이주 아사",
        "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다",
        "코노세카이 노쿄 카쓰 노요 나에가도데",
        "우소미타이 나히 비노 카가 쿠가이 노이미오",
        "히게키닷 테이 가라노론 다도",
        "소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토",
        "우운 께이 다토 카미라이 토캇 테코로",
        "바기도 레타케 테오",
        "노바 소소토 토도 카나이 바쇼데 보쿠 라코이 오스루",
        "토케이 노하리코 후타 리오 요코메니 미나 가라스",
        "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교",
        "이츠 카케에데 나쿠나주 카미노스 베테노 코노머니",
        "야키르키테 도쿠코토와 모건리난 카쟈나이 기부다로도로 유운다",
        "우운 께이 다토 카미라이 토캇 테코로",
        "바기도 레타케 테오",
        "노바 소소토 토도 카나이 바쇼데 보쿠 라코이 오스루",
        "토케이 노하리코 후타 리오 요코메니 미나 가라스",
        "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교"
    ],
    
    // 문장별 해석
    sentences: [
        "서로의 모래시계를 바라보며 키스를 하려고 해",
        "\"안녕(이별)\"과 가장 먼 곳에서 만나자",
        "작은 말로 만들어진 세계가 귀신처럼 크다",
        "만년 속에서 8월의 아침",
        "너는 나 앞에서 한 번으로는 스마일 해봤다",
        "이 세상의 활력이 나에게도",
        "거짓말하고 싶어 나비 비의 향기 향기를",
        "비겁한 손으로",
        "그랬다면 도아의 밖으로 카미가젠 부카카 에테팟 데라토",
        "운운 께이 다토 카미라이 토캇 테코로",
        "바기도 레타케 테오",
        "노바 소소토 토도 카나이 장소에서 보쿠 라코이 오스루",
        "토케이 노하리코 후타 리오 요코메니 미나 가라스",
        "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교",
        "이츠 카케에데 나쿠나주 카미노스 베테노 코노머니",
        "야키르키테 도쿠코토와 모건리난 카쟈나이 기부다로도로 유운다",
        "운운 께이 다토 카미라이 토캇 테코로",
        "바기도 레타케 테오",
        "노바 소소토 토도 카나이 장소에서 보쿠 라코이 오스루",
        "토케이 노하리코 후타 리오 요코메니 미나 가라스",
        "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교"
    ],
    
    // 단어별 분해 및 한국어 해석 (21개 문장에 맞춤)
    words: [
        // 첫 번째 문장: "타가이노 스나도케이 나가메나가라 키스오 시요토"
        [
            { japanese: "타가이노", korean: "높은", pronunciation: "타가이노" },
            { japanese: "스나도케이", korean: "모래시계", pronunciation: "스나도케이" },
            { japanese: "나가메나가라", korean: "바라보며", pronunciation: "나가메나가라" },
            { japanese: "키스오", korean: "키스를", pronunciation: "키스오" },
            { japanese: "시요토", korean: "하려고 해", pronunciation: "시요토" }
        ],
        // 두 번째 문장: "사요나라 카라 이치반 토오이 바쇼데 마치아와세요"
        [
            { japanese: "사요나라", korean: "안녕", pronunciation: "사요나라" },
            { japanese: "카라", korean: "부터", pronunciation: "카라" },
            { japanese: "이치반", korean: "하나의", pronunciation: "이치반" },
            { japanese: "토오이", korean: "먼", pronunciation: "토오이" },
            { japanese: "바쇼데", korean: "장소에서", pronunciation: "바쇼데" },
            { japanese: "마치아와세요", korean: "만나자", pronunciation: "마치아와세요" }
        ],
        // 세 번째 문장: "지소니 아루 코토바데 데키아 갓타세카이 오니 큰다"
        [
            { japanese: "지소니", korean: "작은", pronunciation: "지소니" },
            { japanese: "아루", korean: "있는", pronunciation: "아루" },
            { japanese: "코토바데", korean: "말로", pronunciation: "코토바데" },
            { japanese: "데키아", korean: "만들어진", pronunciation: "데키아" },
            { japanese: "갓타", korean: "세계", pronunciation: "갓타" },
            { japanese: "세카이", korean: "세계", pronunciation: "세카이" },
            { japanese: "오니", korean: "귀신", pronunciation: "오니" },
            { japanese: "큰다", korean: "크다", pronunciation: "큰다" }
        ],
        // 네 번째 문장: "만고 노나카데 하치가츠 노이주 아사"
        [
            { japanese: "만고", korean: "만년", pronunciation: "만고" },
            { japanese: "노나카데", korean: "속에서", pronunciation: "노나카데" },
            { japanese: "하치가츠", korean: "8월", pronunciation: "하치가츠" },
            { japanese: "노이주", korean: "의", pronunciation: "노이주" },
            { japanese: "아사", korean: "아침", pronunciation: "아사" }
        ],
        // 다섯 번째 문장: "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다"
        [
            { japanese: "키미와", korean: "너는", pronunciation: "키미와" },
            { japanese: "보쿠", korean: "나", pronunciation: "보쿠" },
            { japanese: "노마에데", korean: "앞에서", pronunciation: "노마에데" },
            { japanese: "하나칸", korean: "한 번", pronunciation: "하나칸" },
            { japanese: "데와", korean: "로는", pronunciation: "데와" },
            { japanese: "스마", korean: "스마일", pronunciation: "스마" },
            { japanese: "시테미르다", korean: "해봤다", pronunciation: "시테미르다" }
        ],
        // 여섯 번째 문장: "코노세카이 노쿄 카쓰 노요 나에가도데"
        [
            { japanese: "코노세카이", korean: "이 세상", pronunciation: "코노세카이" },
            { japanese: "노쿄", korean: "의", pronunciation: "노쿄" },
            { japanese: "카쓰", korean: "활력", pronunciation: "카쓰" },
            { japanese: "노요", korean: "의", pronunciation: "노요" },
            { japanese: "나에가도데", korean: "나에게도", pronunciation: "나에가도데" }
        ],
        // 일곱 번째 문장: "우소미타이 나히 비노 카가 쿠가이 노이미오"
        [
            { japanese: "우소미타이", korean: "거짓말하고 싶어", pronunciation: "우소미타이" },
            { japanese: "나히", korean: "나비", pronunciation: "나히" },
            { japanese: "비노", korean: "비의", pronunciation: "비노" },
            { japanese: "카가", korean: "향기", pronunciation: "카가" },
            { japanese: "쿠가이", korean: "향기", pronunciation: "쿠가이" },
            { japanese: "노이미오", korean: "의 향기", pronunciation: "노이미오" }
        ],
        // 여덟 번째 문장: "히게키닷 테이 가라노론 다도"
        [
            { japanese: "히게키닷", korean: "비겁한", pronunciation: "히게키닷" },
            { japanese: "테이", korean: "손", pronunciation: "테이" },
            { japanese: "가라노론", korean: "가라노론", pronunciation: "가라노론" },
            { japanese: "다도", korean: "다도", pronunciation: "다도" }
        ],
        // 아홉 번째 문장: "소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토"
        [
            { japanese: "소시타라", korean: "그랬다면", pronunciation: "소시타라" },
            { japanese: "도아노", korean: "도아의", pronunciation: "도아노" },
            { japanese: "소토니", korean: "밖으로", pronunciation: "소토니" },
            { japanese: "카미가젠", korean: "카미가젠", pronunciation: "카미가젠" },
            { japanese: "부카카", korean: "부카카", pronunciation: "부카카" },
            { japanese: "에테팟", korean: "에테팟", pronunciation: "에테팟" },
            { japanese: "데라토", korean: "데라토", pronunciation: "데라토" }
        ],
        // 열 번째 문장: "우운 께이 다토 카미라이 토캇 테코로"
        [
            { japanese: "우운", korean: "운운", pronunciation: "우운" },
            { japanese: "께이", korean: "께이", pronunciation: "께이" },
            { japanese: "다토", korean: "다토", pronunciation: "다토" },
            { japanese: "카미라이", korean: "카미라이", pronunciation: "카미라이" },
            { japanese: "토캇", korean: "토캇", pronunciation: "토캇" },
            { japanese: "테코로", korean: "테코로", pronunciation: "테코로" }
        ],
        // 열한 번째 문장: "바기도 레타케 테오"
        [
            { japanese: "바기도", korean: "바기도", pronunciation: "바기도" },
            { japanese: "레타케", korean: "레타케", pronunciation: "레타케" },
            { japanese: "테오", korean: "테오", pronunciation: "테오" }
        ],
        // 열두 번째 문장: "노바 소소토 토도 카나이 바쇼데 보쿠 라코이 오스루"
        [
            { japanese: "노바", korean: "노바", pronunciation: "노바" },
            { japanese: "소소토", korean: "소소토", pronunciation: "소소토" },
            { japanese: "토도", korean: "토도", pronunciation: "토도" },
            { japanese: "카나이", korean: "카나이", pronunciation: "카나이" },
            { japanese: "바쇼데", korean: "장소에서", pronunciation: "바쇼데" },
            { japanese: "보쿠", korean: "나", pronunciation: "보쿠" },
            { japanese: "라코이", korean: "라코이", pronunciation: "라코이" },
            { japanese: "오스루", korean: "오스루", pronunciation: "오스루" }
        ],
        // 열세 번째 문장: "토케이 노하리코 후타 리오 요코메니 미나 가라스"
        [
            { japanese: "토케이", korean: "토케이", pronunciation: "토케이" },
            { japanese: "노하리코", korean: "노하리코", pronunciation: "노하리코" },
            { japanese: "후타", korean: "후타", pronunciation: "후타" },
            { japanese: "리오", korean: "리오", pronunciation: "리오" },
            { japanese: "요코메니", korean: "요코메니", pronunciation: "요코메니" },
            { japanese: "미나", korean: "미나", pronunciation: "미나" },
            { japanese: "가라스", korean: "가라스", pronunciation: "가라스" }
        ],
        // 열네 번째 문장: "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교"
        [
            { japanese: "스무", korean: "스무", pronunciation: "스무" },
            { japanese: "손나", korean: "손나", pronunciation: "손나" },
            { japanese: "세카야주", korean: "세카야주", pronunciation: "세카야주" },
            { japanese: "타리레", korean: "타리레", pronunciation: "타리레" },
            { japanese: "야", korean: "야", pronunciation: "야" },
            { japanese: "난소", korean: "난소", pronunciation: "난소" },
            { japanese: "데모", korean: "데모", pronunciation: "데모" },
            { japanese: "이키", korean: "이키", pronunciation: "이키" },
            { japanese: "누이데", korean: "누이데", pronunciation: "누이데" },
            { japanese: "유교", korean: "유교", pronunciation: "유교" }
        ],
        // 열다섯 번째 문장: "이츠 카케에데 나쿠나주 카미노스 베테노 코노머니"
        [
            { japanese: "이츠", korean: "이츠", pronunciation: "이츠" },
            { japanese: "카케에데", korean: "카케에데", pronunciation: "카케에데" },
            { japanese: "나쿠나주", korean: "나쿠나주", pronunciation: "나쿠나주" },
            { japanese: "카미노스", korean: "카미노스", pronunciation: "카미노스" },
            { japanese: "베테노", korean: "베테노", pronunciation: "베테노" },
            { japanese: "코노머니", korean: "코노머니", pronunciation: "코노머니" }
        ],
        // 열여섯 번째 문장: "야키르키테 도쿠코토와 모건리난 카쟈나이 기부다로도로 유운다"
        [
            { japanese: "야키르키테", korean: "야키르키테", pronunciation: "야키르키테" },
            { japanese: "도쿠코토와", korean: "도쿠코토와", pronunciation: "도쿠코토와" },
            { japanese: "모건리난", korean: "모건리난", pronunciation: "모건리난" },
            { japanese: "카쟈나이", korean: "카쟈나이", pronunciation: "카쟈나이" },
            { japanese: "기부다로도로", korean: "기부다로도로", pronunciation: "기부다로도로" },
            { japanese: "유운다", korean: "유운다", pronunciation: "유운다" }
        ],
        // 열일곱 번째 문장: "우운 께이 다토 카미라이 토캇 테코로" (반복)
        [
            { japanese: "우운", korean: "운운", pronunciation: "우운" },
            { japanese: "께이", korean: "께이", pronunciation: "께이" },
            { japanese: "다토", korean: "다토", pronunciation: "다토" },
            { japanese: "카미라이", korean: "카미라이", pronunciation: "카미라이" },
            { japanese: "토캇", korean: "토캇", pronunciation: "토캇" },
            { japanese: "테코로", korean: "테코로", pronunciation: "테코로" }
        ],
        // 열여덟 번째 문장: "바기도 레타케 테오" (반복)
        [
            { japanese: "바기도", korean: "바기도", pronunciation: "바기도" },
            { japanese: "레타케", korean: "레타케", pronunciation: "레타케" },
            { japanese: "테오", korean: "테오", pronunciation: "테오" }
        ],
        // 열아홉 번째 문장: "노바 소소토 토도 카나이 바쇼데 보쿠 라코이 오스루" (반복)
        [
            { japanese: "노바", korean: "노바", pronunciation: "노바" },
            { japanese: "소소토", korean: "소소토", pronunciation: "소소토" },
            { japanese: "토도", korean: "토도", pronunciation: "토도" },
            { japanese: "카나이", korean: "카나이", pronunciation: "카나이" },
            { japanese: "바쇼데", korean: "장소에서", pronunciation: "바쇼데" },
            { japanese: "보쿠", korean: "나", pronunciation: "보쿠" },
            { japanese: "라코이", korean: "라코이", pronunciation: "라코이" },
            { japanese: "오스루", korean: "오스루", pronunciation: "오스루" }
        ],
        // 스무 번째 문장: "토케이 노하리코 후타 리오 요코메니 미나 가라스" (반복)
        [
            { japanese: "토케이", korean: "토케이", pronunciation: "토케이" },
            { japanese: "노하리코", korean: "노하리코", pronunciation: "노하리코" },
            { japanese: "후타", korean: "후타", pronunciation: "후타" },
            { japanese: "리오", korean: "리오", pronunciation: "리오" },
            { japanese: "요코메니", korean: "요코메니", pronunciation: "요코메니" },
            { japanese: "미나", korean: "미나", pronunciation: "미나" },
            { japanese: "가라스", korean: "가라스", pronunciation: "가라스" }
        ],
        // 스무한 번째 문장: "스무 손나 세카야주 타리레야 난소 데모 이키 누이데 유교" (반복)
        [
            { japanese: "스무", korean: "스무", pronunciation: "스무" },
            { japanese: "손나", korean: "손나", pronunciation: "손나" },
            { japanese: "세카야주", korean: "세카야주", pronunciation: "세카야주" },
            { japanese: "타리레", korean: "타리레", pronunciation: "타리레" },
            { japanese: "야", korean: "야", pronunciation: "야" },
            { japanese: "난소", korean: "난소", pronunciation: "난소" },
            { japanese: "데모", korean: "데모", pronunciation: "데모" },
            { japanese: "이키", korean: "이키", pronunciation: "이키" },
            { japanese: "누이데", korean: "누이데", pronunciation: "누이데" },
            { japanese: "유교", korean: "유교", pronunciation: "유교" }
        ]
    ]
};