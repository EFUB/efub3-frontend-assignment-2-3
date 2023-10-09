// Object (객체)

// let user: object = {
//   id: 1,
//   name: "이정환",
// };

//   user.id; // 오류 발생

// 변수 user에 저장된 객체의 구조를 그대로 타입으로 만들고 싶을 때
// object가 아닌 객체 리터럴 타입을 이용해야

// 객체 리터럴 타입 - 중괄호를 열고 객체가 갖는 프로퍼티를 직접 나열
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user.id;

// 특수한 프로퍼티 정의

// 선택적 프로퍼티
// - 특정 프로퍼티를 상황에 따라 생략할 때 프로퍼티의 이름 뒤에 ? 붙이기
let user1: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user1 = {
  name: "홍길동",
};

// 읽기 전용 프로퍼티
// - 특정 프로퍼티를 읽기 전용으로 만들 때 프로퍼티의 이름 앞에 readonly 키워드 붙이기
let user2: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

// user2.name = "dskfd"; // 오류 발생
