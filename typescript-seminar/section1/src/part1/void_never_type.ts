// void 타입
// void 타입은 아무런 값도 없음을 의미하는 타입

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// a = null; // undefined 이외의 타입은 할당 불가

// never 타입
// never 타입은 불가능을 의미하는 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
