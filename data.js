// 강의 공통 정보와 PART(차시) 목록 — 사이트의 유일한 데이터 소스.
// 새 PART 추가: session_N.html 작성 → 아래 SESSIONS에 항목 추가.
// prompts 목록은 각 session 페이지의 <div class="prompt" id=".." data-label=".."> 와 일치해야 합니다.

const COURSE = {
  title: "AI와 함께하는 스마트 학교 경영",
  subtitle: "AI로 쓰는 문서, 나만의 비서 만들기",
  org: "경기도교육청북부연수원",
  date: "2026. 10. 28.",
  orgs: "한국강사교육협회 · 미래교육아카데미",
};

const SESSIONS = [
  {
    id: 1,
    tool: "ChatGPT",
    title: "AI 활용의 시작, 프롬프트 작성법",
    desc: "교장실 업무에 AI를 어디까지 맡길지 정하고, 5가지 요소와 메타 프롬프트로 좋은 초안을 받는 법을 익힙니다.",
    href: "session_1.html",
    anchors: [
      { href: "#where", label: "AI는 어디에" },
      { href: "#specific", label: "요청 구체화" },
      { href: "#tools", label: "AI 도구·설정" },
      { href: "#elements", label: "5가지 요소" },
      { href: "#meta", label: "메타 프롬프팅" },
      { href: "#refine", label: "환각·추가 요청" },
    ],
    prompts: [
      { id: "p1-01", label: "입학식 인사말 — 구체적으로 요청하기" },
      { id: "p1-02", label: "개인맞춤설정 — 사용자 지정 지침 예시" },
      { id: "p1-03", label: "① 일반 프롬프트 — 학부모 설명회 교장 인사말 (바로 요청하기)" },
      { id: "p1-04", label: "② 메타 프롬프트 — 위 요청 뒤에 붙여 프롬프트 개선 요청하기" },
      { id: "p1-05", label: "학부모 설명회 안내문 — 프롬프트 만들기 요청" },
      { id: "p1-06", label: "학교장 인사말 — 일반 요청 + 메타 프롬프트" },
      { id: "p1-07", label: "초등학교 학부모 설명회 교장 인사말 작성 전문가 프롬프트 (결과 예시)", example: true },
      { id: "p1-08", label: "환각 방지 — 자료에 없는 내용은 ‘확인 필요’로" },
      { id: "p1-09", label: "답변 다듬기 ① 분량" },
      { id: "p1-10", label: "답변 다듬기 ② 문체" },
      { id: "p1-11", label: "답변 다듬기 ③ 내용" },
      { id: "p1-12", label: "답변 다듬기 ④ 검토" },
    ],
  },
  {
    id: 2,
    tool: "Gemini 노트북",
    title: "학교 자료를 문서의 근거로 정리하기",
    desc: "내가 넣은 소스 안에서만 답하는 노트북으로 자료를 모으고 걸러내, 보고서·슬라이드·인포그래픽으로 만듭니다.",
    href: "session_2.html",
    anchors: [
      { href: "#intro", label: "노트북이란" },
      { href: "#limits", label: "파일·한도" },
      { href: "#start", label: "시작·화면" },
      { href: "#research", label: "딥 리서치·스타일" },
      { href: "#sources", label: "소스 관리" },
      { href: "#studio", label: "결과물 만들기" },
    ],
    prompts: [
      { id: "p2-01", label: "딥 리서치 — 학교 행사 안전 관리 주제" },
      { id: "p2-02", label: "대화 스타일 맞춤 설정 — 행사 안전 검토 리서치 파트너" },
      { id: "p2-03", label: "불필요한 소스 골라내기 + 누락 정보 보완" },
      { id: "p2-04", label: "보고서 요약 · 대화형 보고서 — 작성 시작" },
      { id: "p2-05", label: "슬라이드 자료 — 스타일 지정" },
    ],
  },
  {
    id: 3,
    tool: "Claude",
    title: "학교 업무 문서 작성하고 완성하기",
    desc: "Claude 기본기를 익히고, 아티팩트로 훈화·인사말 도우미 앱을 만들며, 출처 있는 리서치 문서를 작성합니다.",
    href: "session_3.html",
    anchors: [
      { href: "#basics", label: "Claude 시작하기" },
      { href: "#artifact", label: "아티팩트 앱 제작" },
      { href: "#research", label: "Claude 리서치" },
    ],
    prompts: [
      { id: "p3-01", label: "훈화 / 인사말 도우미 앱 제작 (Claude 아티팩트)" },
      { id: "p3-02", label: "그냥 물어보기 — 지역 역사 인물·문화유산" },
      { id: "p3-03", label: "출처 요청 문장 (어떤 질문 뒤에도 붙여 쓰기)" },
      { id: "p3-04", label: "출처를 함께 요청하기 — 지역 역사 인물·문화유산" },
    ],
  },
  {
    id: 4,
    tool: "Gemini Gems · 캔버스",
    title: "반복 업무를 돕는 나만의 AI 비서 만들기",
    desc: "결재 검토 Gem, 단계별 ‘교장실 AI 비서’ 웹앱, 학교 경영 대시보드, AI Studio 앱과 이미지 생성까지.",
    href: "session_4.html",
    anchors: [
      { href: "#gemini", label: "Gemini 도구" },
      { href: "#gems", label: "Gems 결재 비서" },
      { href: "#canvas", label: "캔버스 웹앱" },
      { href: "#dashboard", label: "경영 대시보드" },
      { href: "#aistudio", label: "AI Studio" },
      { href: "#image", label: "이미지 생성" },
    ],
    prompts: [
      { id: "p4-01", label: "Gem [이름] 칸 — 결재 검토 비서" },
      { id: "p4-02", label: "Gem [설명] 칸 — 결재 검토 비서" },
      { id: "p4-03", label: "Gem [요청 사항] 칸 — 결재 검토 비서 지침문" },
      { id: "p4-04", label: "1단계 — 뼈대와 훈화·인사말 탭" },
      { id: "p4-05", label: "2단계 — 훈화 원고 지시문 다듬기" },
      { id: "p4-06", label: "3단계 ① — 민원 응대 연습 탭" },
      { id: "p4-07", label: "3단계 ③ — 응대 가이드 기능 추가" },
      { id: "p4-08", label: "4단계 — 가정통신문 변환기 탭" },
      { id: "p4-09", label: "4단계 실습용 — 예시 메모 (변환기에 입력)" },
      { id: "p4-10", label: "5단계 — 디자인과 사용성 다듬기" },
      { id: "p4-11", label: "즉석 시연 — 도장 색 바꾸기" },
      { id: "p4-12", label: "고칠 때 요령 ① 한 번에 하나씩" },
      { id: "p4-13", label: "고칠 때 요령 ② 깨지면 그 부분만" },
      { id: "p4-14", label: "고칠 때 요령 ③ 잘 될 때 보관" },
      { id: "p4-15", label: "학교 경영 대시보드 웹앱 (캔버스)" },
      { id: "p4-16", label: "마음을 전하는 감사 카드 웹앱 (AI Studio)" },
      { id: "p4-17", label: "체크리스트 앱 (AI Studio)" },
      { id: "p4-18", label: "교무실 출입금지 안내 포스터" },
      { id: "p4-19", label: "전래동화 속 닮은 주인공 찾기" },
      { id: "p4-20", label: "네 컷 만화 — 설명 뒤에 붙여 쓰기" },
      { id: "p4-21", label: "같은 캐릭터로 장면 이어 만들기" },
    ],
  },
];

// 실습 파일 — 첫 화면 '실습 파일' 칸과 PART 4 결재 검토 비서 아래에 함께 표시됩니다.
// 파일은 files/ 폴더에 두고, 받을 때는 name(한글 파일명)으로 저장됩니다.
const PRACTICE_FILES = {
  part: 4,
  anchor: "session_4.html#practice-files",
  sets: [
    { no: 1, title: "실습 1 · 계획서 검토", files: [
      { name: "1_계획서_겨울방학_방과후프로그램.pdf", href: "files/1_plan_winter_afterschool.pdf", type: "계획서" },
    ]},
    { no: 2, title: "실습 2 · 학사일정 + 기안문 함께 검토", files: [
      { name: "2_2학기_학사일정.pdf", href: "files/2_academic_calendar.pdf", type: "학사일정" },
      { name: "2_기안문_교원연수_강사초빙.pdf", href: "files/2_draft_teacher_training.pdf", type: "기안문" },
    ]},
    { no: 3, title: "실습 3 · 운영계획 + 공문 함께 검토", files: [
      { name: "3_가을체육대회_운영계획.pdf", href: "files/3_sports_day_plan.pdf", type: "계획서" },
      { name: "3_공문_겨울철_시설안전점검.pdf", href: "files/3_notice_winter_safety.pdf", type: "공문" },
    ]},
  ],
};
