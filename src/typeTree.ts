let unknownValue: unknown;

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = null;
let e: unknown = undefined;
let f: unknown = [];
let g: unknown = {};
let h: unknown = () => {};

let neverVar: never;

let a2: number = neverVar;
let b2: string = neverVar;
let c2: boolean = neverVar;
let d2: null = neverVar;
let e2: undefined = neverVar;
let f2: [] = neverVar;
let g2: {} = neverVar;

function noReturnFunc(): void {
  console.log("hi");
}

let voidVar: void;

voidVar = undefined;

let neverVar2: never;
voidVar = neverVar2;

let anyValue: any;

let num: number = anyValue;
let str: string = anyValue;
let bool: boolean = anyValue;

anyValue = num;
anyValue = str;
anyValue = bool;
