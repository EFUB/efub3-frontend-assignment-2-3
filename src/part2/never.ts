function errorFunc(): never {
  throw new Error();
}

let neverVar: never;

// let a: number = neverVar;
// let b: string = neverVar;
// let c: boolean = neverVar;
// let d: null = neverVar;
// let e: undefined = neverVar;
// let f: [] = neverVar;
// let g: {} = neverVar;
// never 타입은 모든 타입으로 업캐스팅 가능
// 다운캐스팅 불가능
