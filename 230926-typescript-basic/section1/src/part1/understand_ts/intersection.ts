// 대수 타입 - 교집합 타입
let variable: number & string;
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
