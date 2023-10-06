// 타입 단언

type Person = {
  name: string;
  age: number;
};

// 빈 객체를 Person 타입이라고 타입 단언
// 값 as 타입
let person = {} as Person;
person.name = "";
person.age = 23;

// 초과 프로퍼티 검사를 피할 때 사용
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

let num1 = 10 as never; // 가능
let num2 = 10 as unknown; // 가능
// let num3 = 10  as string; 불가능

// 다중 단언
let num4 = 10 as unknown as string;

// const 단언
let num5 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

// Not Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;
