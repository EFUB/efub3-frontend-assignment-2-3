// 타입 추론
let a = 10; // number 타입으로 추론
let b = "hello"; // string 타입으로 추론
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood/com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
// 함수의 매개변수 타입은 자동으로 추론 불가능

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}
// 기본값이 설정된 매개변수의 타입은 기본값을 기준으로 추론

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); 오류

const num = 10; // 10 Number Literal 타입으로 추론
const str = "hello"; // "hello" String Literal 타입으로 추론

let arr = [1, "string"];
// (string | number)[] 타입으로 추론
// 최적 공통 타입
