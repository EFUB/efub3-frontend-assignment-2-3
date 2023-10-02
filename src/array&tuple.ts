let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true];

let multiArr: (number | string)[] = [1, "hello"];
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];
