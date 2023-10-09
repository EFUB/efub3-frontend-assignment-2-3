// 함수 타입 정의

// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "김아무개", tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall : ${tall}`);
}

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
