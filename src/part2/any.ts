let anyValue: any;

let num: number = anyValue;
let str: string = anyValue;
let bool: boolean = anyValue;

anyValue = num;
anyValue = str;
anyValue = bool;

// 모든 타입으로 다운캐스트 가능
// 모든 타입은 any로 업캐스트 가능
