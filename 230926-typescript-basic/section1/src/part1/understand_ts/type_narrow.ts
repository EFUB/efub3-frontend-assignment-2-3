// 타입 좁히기
function func(value: number | string) {
  // value.toFixed() // 오류
  // value.toUpperCase() // 오류
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}

function func2(value: number | string | Date | null) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof: 내장 클래스 타입 보장
    console.log(value.getTime());
  }
}

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    // in 타입 가드
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
