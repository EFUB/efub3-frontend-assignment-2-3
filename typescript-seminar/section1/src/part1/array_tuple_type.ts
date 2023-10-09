// 배열 타입 정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플은 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플도 배열이므로 push, pop 가능
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 튜플 쓰는 이유 - 오류 빨리 발견 가능
// const users: [string, number][] = [
//   ["이정환", 1],
//   ["이아무개", 2],
//   ["김아무개", 3],
//   ["박아무개", 4],
//   [5, "조아무개"], // 오류 발생
// ];
