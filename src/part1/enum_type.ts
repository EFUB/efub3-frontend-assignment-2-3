// 열거형 타입 (Enum)
// 여러 가지 값들에 각각 이름을 부여해 열거
// 안전하고 직관적
enum Role {
  ADMIN,
  USER,
  GUEST,
}

// 문자형 열거 가능
enum Language {
  korean = "ko",
  english = "en",
}

const user3 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};

const user4 = {
  name: "홍길동",
  role: Role.USER,
};
