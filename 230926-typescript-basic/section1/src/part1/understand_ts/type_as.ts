// 타입 단언
type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; // 틀린 표기
let person = {} as Person;
person.name = '';
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog; // 초과 프로퍼티 검사 피하기

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; A as B는 슈퍼/서브 타입 관계일 때만 가능
let num3 = 10 as unknown as string; // 다중 단언

let num4 = 10 as const; // 10 Number Literal
let cat = {
  name: '야옹이',
  color: 'yellow',
} as const; // 모든 프로퍼티가 readonly 가짐

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
};

const len: number = post.author!.length; // not null 단언
