// void는 undefined와 never의 슈퍼 타입
function noReturnFuncA(): void {
  return undefined;
}

let voidVar: void;
voidVar = undefined;
let neverVar: never;
//voidVar = neverVar;
