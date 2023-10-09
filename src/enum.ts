enum Role {
  ADMIN,
  USER,
  GUEST,
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
};

enum Language {
  korean = "ko",
  english = "en",
}

const user3 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};
