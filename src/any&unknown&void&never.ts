let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  unknownVar * 2;
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
//a = null; strictNullChecks 옵션을 해제 하면 가능

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
