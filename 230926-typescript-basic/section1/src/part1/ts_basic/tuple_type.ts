// 튜플 타입
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hello', true];
tup1.push(1); // 튜플은 길이와 타입이 고정된 배열이지만 컴파일하면 배열로 변환되므로 push/pop으로 요소 추가/삭제 가능

const users = [
  ['이정환', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
];

const users2: [string, number][] = [
  ['이정환', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
  //[5, "조아무개"], // 순서가 바뀌었으므로 오류 발생
];
