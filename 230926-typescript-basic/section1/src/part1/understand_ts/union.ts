import { type } from 'os';

// 대수 타입 - 합집합 타입
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  color: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

/* 불가
let union4: Union1 = {
    name: "",
}; */
