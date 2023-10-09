// void 반환 함수에서 undefined 반환 가능
function noReturnFuncA(): void {
  return undefined;
}

let voidVar: void;

voidVar = undefined;

let neverVar: never;
//voidVar = neverVar;
// void에는 undefined, never만 할당 가능
