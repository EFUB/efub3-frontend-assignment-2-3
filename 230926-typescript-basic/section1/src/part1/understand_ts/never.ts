// never: 타입 계층도 최하단
function errorfunc(): never {
  throw new Error();
}

/* 모든 타입으로 업캐스팅 가능
let neverVar: never;
let a: number = neverVar;
let b: string = neverVar;
let c: boolean = neverVar;
let d: null = neverVar;
let e: undefined = neverVar;
let f: [] = neverVar;
let g: {} = neverVar;
*/

/* 다운 캐스팅 불가
let a: never = 1;
let a: never = "hello";
let c: never = true;
let d: never = null;
let e: never = undefined;
let f: never = [];
let g: never = {};
*/
