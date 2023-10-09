//슈퍼타입
type Book = {
  name: string;
  price: number;
};
//서브타입
type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "동화책",
  price: 2000,
  // skill: "react" //오류
};

//대수 타입
//합집합 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

//객체 타입도 합집합 타입으로 정의할 수 있다.
type ProgramingBook1 = {
  name: string;
  price: number;
  skill: string;
};

type ProgramingBook2 = {
  name: string;
  language: string;
  color: string;
};

type Union = ProgramingBook1 | ProgramingBook2;

// let union1: Union = {
//   name: "동화책",
//   price: 20,
//   color: "red",
// };

// 교집합 타입
type Dog = {
  name: string;
  color: string;
};
type Cat = {
  name: string;
  language: string;
};
type Intersection = Dog & Cat;

let Intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

//타입추론
let z = 10;
//number로 추론
let b = "hello";
//string으로 추론
let c = {
  id: 1,
  name: "gustn",
  profile: "slkdjflk",
};
// id, nmae, profile 프로퍼티가 있는 객체 타입으로 추론

const num = 10;
// 10 Number Literal 타입으로 추론
const str = "hello";
// "hello" String Literal 타입으로 추론
let arr3 = [1, "string"];
// (string | number)[] 타입으로 추론

//타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23;

let dog: Dog = {
  name: "gustn",
  color: "",
  language: "",
} as Dog;
// 초과 프로퍼티 피함
