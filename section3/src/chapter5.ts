// 타입 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "나나",
};

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
//d.toFixed(); // 오류

const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

let arr = [1, "string"];
// (string | number)[] 타입으로 추론
