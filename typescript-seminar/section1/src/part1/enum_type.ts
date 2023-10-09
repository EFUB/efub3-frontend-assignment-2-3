// Enum (열거형)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0 할당 (자동)
  USER, // 1 할당 (자동)
  GUEST, // 2 할당 (자동)
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1
};

/*
  enum Role {
      ADMIN = 0,
      USER = 1,
      GUEST = 2,
  }
  enum Role {
      ADMIN = 10,
      USER, // 11 할당 (자동)
      GUEST, // 12 할당 (자동)
  }
  */

enum Language {
  korean = "ko",
  english = "en",
}

const user3 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean, // "ko"
};
