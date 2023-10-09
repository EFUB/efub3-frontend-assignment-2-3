function func(a: number, b: number): number {
  return a + b;
}

function sendMessage(message: string, userName?: string): void {
  console.log(`${message}, ${userName}`);
}

function myFunc1(x: number, y: number): number {
  return x + y;
}

let myFunc2 = function (x: number, y: number): number {
  return x + y;
};

let myFunc3 = (x: number, y: number): number => {
  return x + y;
};

let myFunc4: (arg1: number, arg2: number) => number;

myFunc4 = function (x, y) {
  return x + y;
};

type funType = (arg1: number, arg2: number) => number;

let sum: funType= (x, y) {
  return x + y;
};

type A = (x:number) => number;
type B = (x:1) => number;

let a: A = x => x+1;
let b: B = x=> x+1;

type A = (x: number, y: number) => number;
type B = (x: number) => number;

let a: A = (x, y) => x+y;
let b: B = (x) => x+1;