// any: 모든 타입의 슈퍼 타입이자 서브 타입
let anyValue: any;
let num: number = anyValue;
let str: string = anyValue;
let bool: boolean = anyValue;
anyValue = num;
anyValue = str;
anyValue = bool;
