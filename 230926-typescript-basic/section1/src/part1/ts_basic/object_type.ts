// 객체 타입
let user: object = {
  id: 1,
  name: '이정환',
};

//user.id; // object 타입은 프로퍼티에 대한 정보가 없으므로 에러 발생

// 객체 리터럴 타입
let user2: {
  // 객체의 구조를 프로퍼티의 타입이 결정
  id: number;
  name: string;
} = {
  id: 1,
  name: '이정환',
};
user2.id;
