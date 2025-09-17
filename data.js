// 스파클 가사 데이터
const sparkleLyrics = {
    // 현재 선택된 음역 (tenor 또는 alto)
    currentVoice: 'tenor',
    
    // 테너 가사 데이터
    tenor: {
        // 원문 가사 (문장 단위)
        original: [
            "타가이노 스나도케이 나가메나가라 키스오 시요토",
            "사요나라 카라 이치반 토오이 바쇼데 마치아와세요",
            "지소니 아루 코토바데 데키아 갓타세카이 오니 큰다",
            "만고 노나카데 하치가츠 노이주 아사",
            "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다",
            "코노세카이 노쿄 카쇼 노요 나에가오데",
            "우소미타이 나히 비오 키가 쿠가이 노이미오",
            "히게키닷 테이이 카라노존 다요",
            "소시타라 도아노 소토니 키미가젠 부카카 에테탓 데타요",
            "우운 메이 다토 카미라이 토캇 테코토",
            "바기토 레타케 테오",
            "노바 소오토 토도 카나이 바쇼데 보쿠 라코이 오스루",
            "토케이 노하리모 후타 리오 요코메니 미나 가라스",
            "스무 손나 세카이오후 타리데잇쇼이야 난쇼데모 이키 누이테 유코",
            "이츠 카케에테 나쿠나루 카미노스 베테오 코노메니",
            "야키츠키테 오쿠코토와 모켄리난 카쟈나이 기무다토오모 우운다",
            "우운 메이 다토 카미라이 토캇 테코토",
            "바기도 레타케 테오",
            "노바 소오토 토도 카나이 바쇼데 보쿠 라코이 오스루",
            "토케이 노하리모 후타 리오 요코메니 미나 가라스",
            "스무 손나 세카이오후 타리데잇쇼 이야 난쇼 데모 이키 누이테 유교"
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
            "그러자 문 밖에 네가 모든 것을 안고 서 있었어",
            "운명이라든가, 미래라든가 하는 것들",
            "붙잡아 두고 싶어서, 손을",
            "손을 뻗으려 하지만 닿지 않는 곳에서, 우리는 사랑을 한다",
            "시간조차 흐름을 멈추지 못한 채, 우리 둘을 곁눈질하며 바라본다",
            "세상이 어떤 모습이어도 둘이 함께라면 어디서든 살아갈 수 있다",
            "언젠가 사라져 버릴 머리카락의 모든 것을, 이 눈에 (담아두고 싶어)",
            "(이 순간을) 마음에 새겨두는 건, 더 이상 권리가 아니라 의무라고 생각해.",
            "운명이라든가, 미래라든가 하는 것들",
            "붙잡아 두고 싶어서, 손을",
            "손을 뻗으려 하지만 닿지 않는 곳에서, 우리는 사랑을 한다",
            "시간조차 흐름을 멈추지 못한 채, 우리 둘을 곁눈질하며 바라본다",
            "세상이 어떤 모습이어도 둘이 함께라면 어디서든 살아갈 수 있다"
        ],
        
        // 단어별 분해 및 한국어 해석 (21개 문장에 맞춤)
        words: [
            // 첫 번째 문장: "타가이노 스나도케이 나가메나가라 키스오 시요토"
            [
                { japanese: "타가이노", korean: "서로의", pronunciation: "타가이노" },
                { japanese: "스나도케이", korean: "모래시계를", pronunciation: "스나도케이" },
                { japanese: "나가메나가라", korean: "바라보며", pronunciation: "나가메나가라" },
                { japanese: "키스오", korean: "키스를", pronunciation: "키스오" },
                { japanese: "시요토", korean: "하려고 해", pronunciation: "시요토" }
            ],
            // 두 번째 문장: "사요나라 카라 이치반 토오이 바쇼데 마치아와세요"
            [
                { japanese: "사요나라", korean: "\"안녕(이별)\"과", pronunciation: "사요나라" },
                { japanese: "카라", korean: "가장", pronunciation: "카라" },
                { japanese: "이치반", korean: "먼", pronunciation: "이치반" },
                { japanese: "토오이", korean: "곳에서", pronunciation: "토오이" },
                { japanese: "바쇼데", korean: "만나자", pronunciation: "바쇼데" },
                { japanese: "마치아와세요", korean: "", pronunciation: "마치아와세요" }
            ],
            // 세 번째 문장: "지소니 아루 코토바데 데키아 갓타세카이 오니 큰다"
            [
                { japanese: "지소니", korean: "작은", pronunciation: "지소니" },
                { japanese: "아루", korean: "말로", pronunciation: "아루" },
                { japanese: "코토바데", korean: "만들어진", pronunciation: "코토바데" },
                { japanese: "데키아", korean: "세계가", pronunciation: "데키아" },
                { japanese: "갓타", korean: "귀신처럼", pronunciation: "갓타" },
                { japanese: "세카이", korean: "크다", pronunciation: "세카이" },
                { japanese: "오니", korean: "", pronunciation: "오니" },
                { japanese: "큰다", korean: "", pronunciation: "큰다" }
            ],
            // 네 번째 문장: "만고 노나카데 하치가츠 노이주 아사"
            [
                { japanese: "만고", korean: "만년", pronunciation: "만고" },
                { japanese: "노나카데", korean: "속에서", pronunciation: "노나카데" },
                { japanese: "하치가츠", korean: "8월의", pronunciation: "하치가츠" },
                { japanese: "노이주", korean: "아침", pronunciation: "노이주" },
                { japanese: "아사", korean: "", pronunciation: "아사" }
            ],
            // 다섯 번째 문장: "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다"
            [
                { japanese: "키미와", korean: "너는", pronunciation: "키미와" },
                { japanese: "보쿠", korean: "나", pronunciation: "보쿠" },
                { japanese: "노마에데", korean: "앞에서", pronunciation: "노마에데" },
                { japanese: "하나칸", korean: "한 번으로는", pronunciation: "하나칸" },
                { japanese: "데와", korean: "스마일", pronunciation: "데와" },
                { japanese: "스마", korean: "해봤다", pronunciation: "스마" },
                { japanese: "시테미르다", korean: "", pronunciation: "시테미르다" }
            ],
            // 여섯 번째 문장: "코노세카이 노쿄 카쇼 노요 나에가오데"
            [
                { japanese: "코노세카이", korean: "이 세상의", pronunciation: "코노세카이" },
                { japanese: "노쿄", korean: "활력이", pronunciation: "노쿄" },
                { japanese: "카쇼", korean: "나에게도", pronunciation: "카쇼" },
                { japanese: "노요", korean: "", pronunciation: "노요" },
                { japanese: "나에가오데", korean: "", pronunciation: "나에가오데" }
            ],
            // 일곱 번째 문장: "우소미타이 나히 비오 키가 쿠가이 노이미오"
            [
                { japanese: "우소미타이", korean: "거짓말하고 싶어", pronunciation: "우소미타이" },
                { japanese: "나히", korean: "나비", pronunciation: "나히" },
                { japanese: "비오", korean: "비의", pronunciation: "비오" },
                { japanese: "키가", korean: "향기", pronunciation: "키가" },
                { japanese: "쿠가이", korean: "향기", pronunciation: "쿠가이" },
                { japanese: "노이미오", korean: "향기를", pronunciation: "노이미오" }
            ],
            // 여덟 번째 문장: "히게키닷 테이이 카라노존 다요"
            [
                { japanese: "히게키닷", korean: "비겁한", pronunciation: "히게키닷" },
                { japanese: "테이이", korean: "손", pronunciation: "테이이" },
                { japanese: "카라노존", korean: "으로", pronunciation: "카라노존" },
                { japanese: "다요", korean: "", pronunciation: "다요" }
            ],
            // 아홉 번째 문장: "소시타라 도아노 소토니 키미가젠 부카카 에테탓 데타요"
            [
                { japanese: "소시타라", korean: "그러자", pronunciation: "소시타라" },
                { japanese: "도아노", korean: "문", pronunciation: "도아노" },
                { japanese: "소토니", korean: "밖에", pronunciation: "소토니" },
                { japanese: "키미가젠", korean: "네가", pronunciation: "키미가젠" },
                { japanese: "부카카", korean: "모든", pronunciation: "부카카" },
                { japanese: "에테탓", korean: "것을", pronunciation: "에테탓" },
                { japanese: "데타요", korean: "안고 서 있었어", pronunciation: "데타요" }
            ],
            // 열 번째 문장: "우운 메이 다토 카미라이 토캇 테코토"
            [
                { japanese: "우운", korean: "운명이라든가", pronunciation: "우운" },
                { japanese: "메이", korean: "미래라든가", pronunciation: "메이" },
                { japanese: "다토", korean: "하는", pronunciation: "다토" },
                { japanese: "카미라이", korean: "것들", pronunciation: "카미라이" },
                { japanese: "토캇", korean: "", pronunciation: "토캇" },
                { japanese: "테코토", korean: "", pronunciation: "테코토" }
            ],
            // 열한 번째 문장: "바기토 레타케 테오"
            [
                { japanese: "바기토", korean: "붙잡아", pronunciation: "바기토" },
                { japanese: "레타케", korean: "두고", pronunciation: "레타케" },
                { japanese: "테오", korean: "싶어서, 손을", pronunciation: "테오" }
            ],
            // 열두 번째 문장: "노바 소오토 토도 카나이 바쇼데 보쿠 라코이 오스루"
            [
                { japanese: "노바", korean: "손을", pronunciation: "노바" },
                { japanese: "소오토", korean: "뻗으려", pronunciation: "소오토" },
                { japanese: "토도", korean: "하지만", pronunciation: "토도" },
                { japanese: "카나이", korean: "닿지", pronunciation: "카나이" },
                { japanese: "바쇼데", korean: "않는", pronunciation: "바쇼데" },
                { japanese: "보쿠", korean: "곳에서,", pronunciation: "보쿠" },
                { japanese: "라코이", korean: "우리는", pronunciation: "라코이" },
                { japanese: "오스루", korean: "사랑을 한다", pronunciation: "오스루" }
            ],
            // 열세 번째 문장: "토케이 노하리모 후타 리오 요코메니 미나 가라스"
            [
                { japanese: "토케이", korean: "시간조차", pronunciation: "토케이" },
                { japanese: "노하리모", korean: "흐름을", pronunciation: "노하리모" },
                { japanese: "후타", korean: "멈추지", pronunciation: "후타" },
                { japanese: "리오", korean: "못한", pronunciation: "리오" },
                { japanese: "요코메니", korean: "채,", pronunciation: "요코메니" },
                { japanese: "미나", korean: "우리", pronunciation: "미나" },
                { japanese: "가라스", korean: "둘을 곁눈질하며 바라본다", pronunciation: "가라스" }
            ],
            // 열네 번째 문장: "스무 손나 세카이오후 타리데잇쇼이야 난쇼데모 이키 누이테 유코"
            [
                { japanese: "스무", korean: "세상이", pronunciation: "스무" },
                { japanese: "손나", korean: "어떤", pronunciation: "손나" },
                { japanese: "세카이오후", korean: "모습이어도", pronunciation: "세카이오후" },
                { japanese: "타리데잇쇼이야", korean: "둘이 함께라면", pronunciation: "타리데잇쇼이야" },
                { japanese: "난쇼데모", korean: "어디서든", pronunciation: "난쇼데모" },
                { japanese: "이키", korean: "살아갈", pronunciation: "이키" },
                { japanese: "누이테", korean: "수", pronunciation: "누이테" },
                { japanese: "유코", korean: "있다", pronunciation: "유코" }
            ],
            // 열다섯 번째 문장: "이츠 카케에테 나쿠나루 카미노스 베테오 코노메니"
            [
                { japanese: "이츠", korean: "언젠가", pronunciation: "이츠" },
                { japanese: "카케에테", korean: "사라져", pronunciation: "카케에테" },
                { japanese: "나쿠나루", korean: "버릴", pronunciation: "나쿠나루" },
                { japanese: "카미노스", korean: "머리카락의", pronunciation: "카미노스" },
                { japanese: "베테오", korean: "모든 것을,", pronunciation: "베테오" },
                { japanese: "코노메니", korean: "이 눈에 (담아두고 싶어)", pronunciation: "코노메니" }
            ],
            // 열여섯 번째 문장: "야키츠키테 오쿠코토와 모켄리난 카쟈나이 기무다토오모 우운다"
            [
                { japanese: "야키츠키테", korean: "(이 순간을)", pronunciation: "야키츠키테" },
                { japanese: "오쿠코토와", korean: "마음에", pronunciation: "오쿠코토와" },
                { japanese: "모켄리난", korean: "새겨두는", pronunciation: "모켄리난" },
                { japanese: "카쟈나이", korean: "건,", pronunciation: "카쟈나이" },
                { japanese: "기무다토오모", korean: "더 이상 권리가 아니라", pronunciation: "기무다토오모" },
                { japanese: "우운다", korean: "의무라고 생각해.", pronunciation: "우운다" }
            ],
            // 열일곱 번째 문장: "우운 메이 다토 카미라이 토캇 테코토" (반복)
            [
                { japanese: "우운", korean: "운명이라든가", pronunciation: "우운" },
                { japanese: "메이", korean: "미래라든가", pronunciation: "메이" },
                { japanese: "다토", korean: "하는", pronunciation: "다토" },
                { japanese: "카미라이", korean: "것들", pronunciation: "카미라이" },
                { japanese: "토캇", korean: "", pronunciation: "토캇" },
                { japanese: "테코토", korean: "", pronunciation: "테코토" }
            ],
            // 열여덟 번째 문장: "바기도 레타케 테오" (반복)
            [
                { japanese: "바기도", korean: "붙잡아", pronunciation: "바기도" },
                { japanese: "레타케", korean: "두고", pronunciation: "레타케" },
                { japanese: "테오", korean: "싶어서, 손을", pronunciation: "테오" }
            ],
            // 열아홉 번째 문장: "노바 소오토 토도 카나이 바쇼데 보쿠 라코이 오스루" (반복)
            [
                { japanese: "노바", korean: "손을", pronunciation: "노바" },
                { japanese: "소오토", korean: "뻗으려", pronunciation: "소오토" },
                { japanese: "토도", korean: "하지만", pronunciation: "토도" },
                { japanese: "카나이", korean: "닿지", pronunciation: "카나이" },
                { japanese: "바쇼데", korean: "않는", pronunciation: "바쇼데" },
                { japanese: "보쿠", korean: "곳에서,", pronunciation: "보쿠" },
                { japanese: "라코이", korean: "우리는", pronunciation: "라코이" },
                { japanese: "오스루", korean: "사랑을 한다", pronunciation: "오스루" }
            ],
            // 스무 번째 문장: "토케이 노하리모 후타 리오 요코메니 미나 가라스" (반복)
            [
                { japanese: "토케이", korean: "시간조차", pronunciation: "토케이" },
                { japanese: "노하리모", korean: "흐름을", pronunciation: "노하리모" },
                { japanese: "후타", korean: "멈추지", pronunciation: "후타" },
                { japanese: "리오", korean: "못한", pronunciation: "리오" },
                { japanese: "요코메니", korean: "채,", pronunciation: "요코메니" },
                { japanese: "미나", korean: "우리", pronunciation: "미나" },
                { japanese: "가라스", korean: "둘을 곁눈질하며 바라본다", pronunciation: "가라스" }
            ],
            // 스무한 번째 문장: "스무 손나 세카이오후 타리데잇쇼 이야 난쇼 데모 이키 누이테 유교" (반복)
            [
                { japanese: "스무", korean: "세상이", pronunciation: "스무" },
                { japanese: "손나", korean: "어떤", pronunciation: "손나" },
                { japanese: "세카이오후", korean: "모습이어도", pronunciation: "세카이오후" },
                { japanese: "타리데잇쇼", korean: "둘이 함께라면", pronunciation: "타리데잇쇼" },
                { japanese: "이야", korean: "", pronunciation: "이야" },
                { japanese: "난쇼", korean: "어디서든", pronunciation: "난쇼" },
                { japanese: "데모", korean: "", pronunciation: "데모" },
                { japanese: "이키", korean: "살아갈", pronunciation: "이키" },
                { japanese: "누이테", korean: "수", pronunciation: "누이테" },
                { japanese: "유교", korean: "있다", pronunciation: "유교" }
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
            "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다 코노세카이 노쿄 카쓰 노요 나에가도데",
            "우소미타이 나히 비노 카가 쿠가이 노이미오 히게키닷 테이 가라노론 다도 소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토",
            "우운 께이 다토 카미라이 토캇 테코로",
            "바기도 레타케 테오",
            "노바 소소토 토도 카나이 바쇼 데보쿠 라코이 오스루 토케이 노하리코 후타 리오 요코메니 미나 가라스 스무 손나 세카이호 후 타리데 잇 쇼이야",
            "이키 누이데 유교",
            "모켄리난 카쟈나이 기부다로도로 유운다",
            "우운 께이 다토 카미라이 토캇 테코로",
            "바기도 레타케 테오",
            "노바 소소토 토도 카나이 바쇼 데보쿠 라코이 오스루 토케이 노하리코 후타 리오 요코메니 미나 가라스 스무 손나 세카이호 후 타리데 잇 쇼이야 난쇼데모 이키 누이테 유코"
        ],
        
        // 문장별 해석
        sentences: [
            "아직 이 세상은",
            "나를 위한 나라를 만들고 싶어",
            "소망도 이상도",
            "아름답게 빛나요",
            "너는 나 앞에서 한 번으로는 스마일 해봤다 이 세상의 활력이 나에게도",
            "거짓말하고 싶어 나비 비의 향기 향기를 비겁한 손으로 그러자 문 밖에 네가 모든 것을 안고 서 있었어",
            "운명이라든가, 미래라든가 하는 것들",
            "붙잡아 두고 싶어서, 손을",
            "손을 뻗으려 하지만 닿지 않는 곳에서, 우리는 사랑을 한다 시간조차 흐름을 멈추지 못한 채, 우리 둘을 곁눈질하며 바라본다 세상이 어떤 모습이어도 둘이 함께라면",
            "살아갈 수 있다",
            "(이 순간을) 마음에 새겨두는 건, 더 이상 권리가 아니라 의무라고 생각해.",
            "운명이라든가, 미래라든가 하는 것들",
            "붙잡아 두고 싶어서, 손을",
            "손을 뻗으려 하지만 닿지 않는 곳에서, 우리는 사랑을 한다 시간조차 흐름을 멈추지 못한 채, 우리 둘을 곁눈질하며 바라본다 세상이 어떤 모습이어도 둘이 함께라면 어디서든 살아갈 수 있다"
        ],
        
        // 단어별 분해 및 한국어 해석 (알토 버전)
        words: [
            // 첫 번째 문장: "마다코노 세카이와"
            [
                { japanese: "마다코노", korean: "아직", pronunciation: "마다코노" },
                { japanese: "세카이와", korean: "이 세상은", pronunciation: "세카이와" }
            ],
            // 두 번째 문장: "보쿠오카이 나라 시테타이 마타이 다"
            [
                { japanese: "보쿠오카이", korean: "나를 위한", pronunciation: "보쿠오카이" },
                { japanese: "나라", korean: "나라를", pronunciation: "나라" },
                { japanese: "시테타이", korean: "만들고", pronunciation: "시테타이" },
                { japanese: "마타이", korean: "싶어", pronunciation: "마타이" },
                { japanese: "다", korean: "", pronunciation: "다" }
            ],
            // 세 번째 문장: "노조미도 리이이 다로"
            [
                { japanese: "노조미도", korean: "소망도", pronunciation: "노조미도" },
                { japanese: "리이이", korean: "이상도", pronunciation: "리이이" },
                { japanese: "다로", korean: "", pronunciation: "다로" }
            ],
            // 네 번째 문장: "우츠쿠시쿠 모가쿠요"
            [
                { japanese: "우츠쿠시쿠", korean: "아름답게", pronunciation: "우츠쿠시쿠" },
                { japanese: "모가쿠요", korean: "빛나요", pronunciation: "모가쿠요" }
            ],
            // 다섯 번째 문장: "키미와 보쿠 노마에데 하나칸 데와 스마 시테미르다 코노세카이 노쿄 카쓰 노요 나에가도데"
            [
                { japanese: "키미와", korean: "너는", pronunciation: "키미와" },
                { japanese: "보쿠", korean: "나", pronunciation: "보쿠" },
                { japanese: "노마에데", korean: "앞에서", pronunciation: "노마에데" },
                { japanese: "하나칸", korean: "한 번으로는", pronunciation: "하나칸" },
                { japanese: "데와", korean: "스마일", pronunciation: "데와" },
                { japanese: "스마", korean: "해봤다", pronunciation: "스마" },
                { japanese: "시테미르다", korean: "", pronunciation: "시테미르다" },
                { japanese: "코노세카이", korean: "이 세상의", pronunciation: "코노세카이" },
                { japanese: "노쿄", korean: "활력이", pronunciation: "노쿄" },
                { japanese: "카쓰", korean: "나에게도", pronunciation: "카쓰" },
                { japanese: "노요", korean: "", pronunciation: "노요" },
                { japanese: "나에가도데", korean: "", pronunciation: "나에가도데" }
            ],
            // 여섯 번째 문장: "우소미타이 나히 비노 카가 쿠가이 노이미오 히게키닷 테이 가라노론 다도 소시타라 도아노 소토니 카미가젠 부카카 에테팟 데라토"
            [
                { japanese: "우소미타이", korean: "거짓말하고", pronunciation: "우소미타이" },
                { japanese: "나히", korean: "싶어", pronunciation: "나히" },
                { japanese: "비노", korean: "나비", pronunciation: "비노" },
                { japanese: "카가", korean: "비의", pronunciation: "카가" },
                { japanese: "쿠가이", korean: "향기", pronunciation: "쿠가이" },
                { japanese: "노이미오", korean: "향기를", pronunciation: "노이미오" },
                { japanese: "히게키닷", korean: "비겁한", pronunciation: "히게키닷" },
                { japanese: "테이", korean: "손", pronunciation: "테이" },
                { japanese: "가라노론", korean: "으로", pronunciation: "가라노론" },
                { japanese: "다도", korean: "", pronunciation: "다도" },
                { japanese: "소시타라", korean: "그러자", pronunciation: "소시타라" },
                { japanese: "도아노", korean: "문", pronunciation: "도아노" },
                { japanese: "소토니", korean: "밖에", pronunciation: "소토니" },
                { japanese: "카미가젠", korean: "네가", pronunciation: "카미가젠" },
                { japanese: "부카카", korean: "모든", pronunciation: "부카카" },
                { japanese: "에테팟", korean: "것을", pronunciation: "에테팟" },
                { japanese: "데라토", korean: "안고 서 있었어", pronunciation: "데라토" }
            ],
            // 일곱 번째 문장: "우운 께이 다토 카미라이 토캇 테코로"
            [
                { japanese: "우운", korean: "운명이라든가", pronunciation: "우운" },
                { japanese: "께이", korean: "미래라든가", pronunciation: "께이" },
                { japanese: "다토", korean: "하는", pronunciation: "다토" },
                { japanese: "카미라이", korean: "것들", pronunciation: "카미라이" },
                { japanese: "토캇", korean: "", pronunciation: "토캇" },
                { japanese: "테코로", korean: "", pronunciation: "테코로" }
            ],
            // 여덟 번째 문장: "바기도 레타케 테오"
            [
                { japanese: "바기도", korean: "붙잡아", pronunciation: "바기도" },
                { japanese: "레타케", korean: "두고", pronunciation: "레타케" },
                { japanese: "테오", korean: "싶어서, 손을", pronunciation: "테오" }
            ],
            // 아홉 번째 문장: "노바 소소토 토도 카나이 바쇼 데보쿠 라코이 오스루 토케이 노하리코 후타 리오 요코메니 미나 가라스 스무 손나 세카이호 후 타리데 잇 쇼이야"
            [
                { japanese: "노바", korean: "손을", pronunciation: "노바" },
                { japanese: "소소토", korean: "뻗으려", pronunciation: "소소토" },
                { japanese: "토도", korean: "하지만", pronunciation: "토도" },
                { japanese: "카나이", korean: "닿지", pronunciation: "카나이" },
                { japanese: "바쇼", korean: "않는", pronunciation: "바쇼" },
                { japanese: "데보쿠", korean: "곳에서,", pronunciation: "데보쿠" },
                { japanese: "라코이", korean: "우리는", pronunciation: "라코이" },
                { japanese: "오스루", korean: "사랑을 한다", pronunciation: "오스루" },
                { japanese: "토케이", korean: "시간조차", pronunciation: "토케이" },
                { japanese: "노하리코", korean: "흐름을", pronunciation: "노하리코" },
                { japanese: "후타", korean: "멈추지", pronunciation: "후타" },
                { japanese: "리오", korean: "못한", pronunciation: "리오" },
                { japanese: "요코메니", korean: "채,", pronunciation: "요코메니" },
                { japanese: "미나", korean: "우리", pronunciation: "미나" },
                { japanese: "가라스", korean: "둘을", pronunciation: "가라스" },
                { japanese: "스무", korean: "곁눈질하며", pronunciation: "스무" },
                { japanese: "손나", korean: "바라본다", pronunciation: "손나" },
                { japanese: "세카이호", korean: "세상이", pronunciation: "세카이호" },
                { japanese: "후", korean: "어떤", pronunciation: "후" },
                { japanese: "타리데", korean: "모습이어도", pronunciation: "타리데" },
                { japanese: "잇", korean: "둘이", pronunciation: "잇" },
                { japanese: "쇼이야", korean: "함께라면", pronunciation: "쇼이야" }
            ],
            // 열 번째 문장: "이키 누이데 유교"
            [
                { japanese: "이키", korean: "살아갈", pronunciation: "이키" },
                { japanese: "누이데", korean: "수", pronunciation: "누이데" },
                { japanese: "유교", korean: "있다", pronunciation: "유교" }
            ],
            // 열한 번째 문장: "모켄리난 카쟈나이 기부다로도로 유운다"
            [
                { japanese: "모켄리난", korean: "(이 순간을)", pronunciation: "모켄리난" },
                { japanese: "카쟈나이", korean: "마음에", pronunciation: "카쟈나이" },
                { japanese: "기부다로도로", korean: "새겨두는 건,", pronunciation: "기부다로도로" },
                { japanese: "유운다", korean: "더 이상 권리가 아니라 의무라고 생각해.", pronunciation: "유운다" }
            ],
            // 열두 번째 문장: "우운 께이 다토 카미라이 토캇 테코로" (반복)
            [
                { japanese: "우운", korean: "운명이라든가", pronunciation: "우운" },
                { japanese: "께이", korean: "미래라든가", pronunciation: "께이" },
                { japanese: "다토", korean: "하는", pronunciation: "다토" },
                { japanese: "카미라이", korean: "것들", pronunciation: "카미라이" },
                { japanese: "토캇", korean: "", pronunciation: "토캇" },
                { japanese: "테코로", korean: "", pronunciation: "테코로" }
            ],
            // 열세 번째 문장: "바기도 레타케 테오" (반복)
            [
                { japanese: "바기도", korean: "붙잡아", pronunciation: "바기도" },
                { japanese: "레타케", korean: "두고", pronunciation: "레타케" },
                { japanese: "테오", korean: "싶어서, 손을", pronunciation: "테오" }
            ],
            // 열네 번째 문장: "노바 소소토 토도 카나이 바쇼 데보쿠 라코이 오스루 토케이 노하리코 후타 리오 요코메니 미나 가라스 스무 손나 세카이호 후 타리데 잇 쇼이야 난쇼데모 이키 누이테 유코"
            [
                { japanese: "노바", korean: "손을", pronunciation: "노바" },
                { japanese: "소소토", korean: "뻗으려", pronunciation: "소소토" },
                { japanese: "토도", korean: "하지만", pronunciation: "토도" },
                { japanese: "카나이", korean: "닿지", pronunciation: "카나이" },
                { japanese: "바쇼", korean: "않는", pronunciation: "바쇼" },
                { japanese: "데보쿠", korean: "곳에서,", pronunciation: "데보쿠" },
                { japanese: "라코이", korean: "우리는", pronunciation: "라코이" },
                { japanese: "오스루", korean: "사랑을 한다", pronunciation: "오스루" },
                { japanese: "토케이", korean: "시간조차", pronunciation: "토케이" },
                { japanese: "노하리코", korean: "흐름을", pronunciation: "노하리코" },
                { japanese: "후타", korean: "멈추지", pronunciation: "후타" },
                { japanese: "리오", korean: "못한", pronunciation: "리오" },
                { japanese: "요코메니", korean: "채,", pronunciation: "요코메니" },
                { japanese: "미나", korean: "우리", pronunciation: "미나" },
                { japanese: "가라스", korean: "둘을", pronunciation: "가라스" },
                { japanese: "스무", korean: "곁눈질하며", pronunciation: "스무" },
                { japanese: "손나", korean: "바라본다", pronunciation: "손나" },
                { japanese: "세카이호", korean: "세상이", pronunciation: "세카이호" },
                { japanese: "후", korean: "어떤", pronunciation: "후" },
                { japanese: "타리데", korean: "모습이어도", pronunciation: "타리데" },
                { japanese: "잇", korean: "둘이", pronunciation: "잇" },
                { japanese: "쇼이야", korean: "함께라면", pronunciation: "쇼이야" },
                { japanese: "난쇼데모", korean: "어디서든", pronunciation: "난쇼데모" },
                { japanese: "이키", korean: "살아갈", pronunciation: "이키" },
                { japanese: "누이테", korean: "수", pronunciation: "누이테" },
                { japanese: "유코", korean: "있다", pronunciation: "유코" }
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