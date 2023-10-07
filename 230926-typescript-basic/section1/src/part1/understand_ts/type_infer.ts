let a = 10; // number 추론
let b = 'hello'; // string 추론
let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  urls: ['https://winterlood.com'],
}; // id name profile urls 프로퍼티가 있는 객체 타입으로 추론

/* 매개변수 타입은 자동 추론 불가
function func(param){

} */

let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

function func() {
  return 'hello'; // 반환값은 return문 기준 추론
}

function func2(message = 'hello') {
  // 기본값이 있는 매개변수는 기본값 기준으로 타입 추론
  return 'hello';
}

let d; // 초기값 생략 시 암시적인 any 타입으로 추론
d = 10;
d.toFixed();
d = 'hello';
d.toUpperCase();
// d.toFixed(); 값 할당을 통해 계속 타입이 변화 - string이므로 toFixed 오류

// const는 초기화때 설정한 값 변경 불가하므로 가장 좁은 타입으로 추론 (리터럴)
const num = 10; // 10 Number Literal
const str = 'hello'; // "hello" String Literal

let arr = [1, 'string']; // (string | number)[]
