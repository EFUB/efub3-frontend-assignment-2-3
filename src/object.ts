let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let user2: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2 = {
  name: "홍길동",
};
