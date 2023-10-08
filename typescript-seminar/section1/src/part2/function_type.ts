// 함수 타입

// 함수의 기본적인 타입 선언 & 함수의 인자
function sum(a: number, b: number): number {
    return a + b;
  }
  
  // console.log(sum("1", "3"));
  console.log(sum(1, 3));
  // console.log(sum(1, "3"));
  
  sum(10, 20);
  // sum(10, 20, 30);
  // sum(10);
  
  // 함수의 인자: 선택적 매개변수
  function sendMessage(message: string, userName?: string): void {
    console.log(`${message}, ${userName}`);
  }
  sendMessage('hi'); // hi, undefined
  sendMessage('hi', 'Jimin'); // hi, Jimin
  
  // 함수의 인자: 매개변수 초기화
  function sendMessage2(message: string, userName: string = 'EFUB'): void {
    console.log(`${message}, ${userName}`);
  }
  sendMessage2('hi'); // hi, EFUB
  sendMessage2('hi', 'Jimin'); // hi, Jimin
  
  // 함수 표현 방법
  // 함수 선언식
  function myFunc1(x: number, y: number): number {
    return x + y;
  }
  // 함수 표현식
  let myFunc2 = function (x: number, y: number): number {
    return x + y;
  };
  // 화살표 함수
  let myFunc3 = (x: number, y: number): number => {
    return x + y;
  };
  
  // 호출 시그니처 - 미리 함수 타입을 지정
  let myFunc4: (arg1: number, arg2: number) => number;
  myFunc4 = function (x, y) {
    return x + y;
  };
  
  type funType = (arg1: number, arg2: number) => number;
  let sum_: funType = (x, y) => {
    return x + y;
  };
  let prod: funType = (x, y) => {
    return x * y;
  };
  
  // 함수 호환성
  // 매개변수 개수 동일한 경우 - 매개변수가 부모 자식 관계
  type A = (x: number) => number;
  type B = (x: 1) => number;
  let a: A = (x) => x + 1;
  let b: B = (x) => x + 1;
  // a = b; // Error
  b = a;
  
  // 매개변수 개수 다를 경우 - 매개변수가 더 많은 쪽으로 호환성 판단
  type A_ = (x: number, y: number) => number;
  type B_ = (x: number) => number;
  let a_: A_ = (x, y) => x + y;
  let b_: B_ = (x) => x + 1;
  a_ = b_;
  // b_ = a_; // Error
  
  // 매개변수 없을 경우
  type A__ = () => number;
  type B__ = () => 1;
  let a__: A__ = () => 1;
  let b__: B__ = () => 1;
  a__ = b__;
  // b__ = a__; // Error
  
  // 함수 오버로딩
  // 매개변수 개수 동일 / 타입 다름
  function add(a: string, b: string): string;
  function add(a: number, b: number): number;
  
  function add(a: any, b: any): any {
    return a + b;
  }
  
  console.log(add(1, 2));
  console.log(add('1', '2'));
  
  // 매개변수 개수 다름 / 타입 동일
  function add_(a: number): number;
  function add_(a: number, b: number): number;
  function add_(a: number, b: number, c: number): number;
  
  function add_(a: number, b?: number, c?: number): number {
    return a + (b ?? 0) + (c ?? 0);
  }
  
  console.log(add_(1)); // 1
  console.log(add_(1, 2)); // 3
  console.log(add_(1, 2, 3)); // 6
  
  // 매개변수 개수 / 타입 모두 다름
  function printConsole(a: number): void;
  function printConsole(a: string): void;
  function printConsole(a: number, b: string): void;
  function printConsole(a: string, b: number): void;
  
  function printConsole(a: any, b?: any): void {
    console.log(a, b ?? '');
  }
  
  printConsole('1');
  printConsole('1', 2);