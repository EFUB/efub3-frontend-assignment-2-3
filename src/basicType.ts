//원시 타입

//number
let num1: number = -1.23;
let num2: number = Infinity;
let num3: number = NaN;
//string
let str1: string = "name";
let str2: string = `hello ${str1}`;
//리터럴 타입
let numA: 10 = 10;
//배열 타입
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];
let boolArr: Array<boolean> = [true, false, false];
let multiArr: (number | string)[] = [1, "hello"];
let doubleArr: number[][] = [
  [1, 2],
  [3, 4],
];
//튜플 타입
let tuple1: [number, number] = [1, 2];
let tuple2: [number, string, boolean] = [1, "hello", true];
tuple1.push(3);
//컴파일시 튜플은 배열로 변환됨. 고정된 길이 무시하고 push, pop 으로 요소 추가/삭제가 가능함.
const users: [string, number][] = [
  ["홍길동", 1],
  ["토마토", 2],
];
//회원 정보를 2차원 배열로 저장시 튜플을 사용해서 정해진 자리에 type을 미리 지정하면 쉽게 에러 발견 가능
//객체 타입
let user: object = {
  id: 1,
  name: "김자두",
};
//console.log(user.id);
//에러 발생

//객체 리터럴 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "김자두",
};
//중괄호 안에 각 프로퍼티의 타입을 나열함. 프로퍼티 작성시 타입 검사. 구조적 타입 시스템

let user3: {
  id?: number;
  readonly name: string;
} = {
  name: "오렌지",
};
//user3.name = '바나나'
//읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540)

//타입 별칭(Type Alias)
//변수 선언하듯 타입을 별도로 정의함.
type User = {
  id: number;
  name: string;
};
let userOne: User = {
  id: 1,
  name: "딸기",
};
let userTwo: User = {
  id: 2,
  name: "포도",
};

function test() {
  type User = string;
}
//스코프가 다르면 같은 변수의 타입 선언 가능

//인덱스 시그니쳐]
type BadCountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

//이런식으로 타입 설정 가능
type GoodCountryCodes = {
  [key: string]: string;
};

let countryCodes: GoodCountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

//열거형 타입 : enum
enum Role {
  ADMIN = 10,
  USER, //11
  GUEST, //12
}
const roleUser1 = {
  name: "오렌지",
  role: Role.ADMIN,
};
enum Language {
  korea = "ko",
  english = "en",
}
//unknown 타입 => 꽁짜 타입
//unknown에는 모든 타입을 할당 가능(다 받는다)
//어떤 타입에도 unknown 할당 불가능(다른 타입에는 안 받는다 )
let unknown1: unknown;
unknown1 = "";
unknown1 = 123;
let num: number = 1;
//num = unknown1;
if (typeof unknown1 === "number") {
  //타입 좁히기
  unknown1 = unknown1 * 2;
}
//void 타입
//undefined 이외의 타입은 할당 불가
//strictNullChecks 옵션을 해테하면 null도 할당 가능

//never 타입
//함수가 어떠한 값도 반환할 수 없는 상황에서 반환값 타입
//any를 포함해 그 어떠한 타입의 값도 never 타입 변수에 할당 불가
function fun3(): never {
  while (true) {}
}
function fun4(): never {
  throw new Error();
}

//타입 호환성
let number1: number = 10;
let number2: 10 = 10;
number1 = number2;
//더 넓은 범위인 number1에 number2(리터럴 타입) 할당 가능
//반대는 불가능

//unknown
//모든 타입은 unknown으로 업캐스트 가능
//unknown은 모든 타입의 값을 다 담을 수 있다.
let a: unknown = 1;
let b: unknown = "hello";
//모든 타입 다운 캐스트 불가능
// unknown은 모든 타입을 포함하기 때문에 다른 타입이 품을 수 x
let unknown2: unknown;
//let c : number = unknown2

//never
//타입 계층도의 가장 아래 위치 (공집합)
//unknown과 반대
//never 타입은 모든 타입으로 업캐스팅 가능
//어떠한 타입도 never 값을 품을 수 있다.
let neverVar: never;
//그 어떤 타입도 never 타입으로 다운캐스팅 불가능
//never 타입에는 어떠한 값도 할당 할 수 없다.
//let e: never = 1;

//void
//void는 undefined와 never의 슈퍼타입
//undefined 반환가능
//void 에는 undefind 와 never 만 할당이 가능하다.
function noReturnFun(): void {
  return undefined;
}

let voidVar: void;
let neverVar1: never;
//any
//any타입은 타입 계층도를 무시함.
//모든 타입으로 다운캐스트, 업캐스트 가능

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};
let animal: Animal = {
  name: "토끼",
  color: "white",
};
let dog: Dog = {
  name: "초코",
  color: "brown",
  breed: "말티푸",
};
animal = dog;
//업캐스트 가능.
//범위가 넓은 Animal 타입 변수에 Dog 타입의 객체를 할당 가능

//dog = animal;
//다운캐스트 불가능
//범가 넓은 Animal 타입을 dog 변수에 할당 불가능.

//객체 타입의 호환성 : 초과 프로퍼티 검사
let hamster: Animal = {
  name: "햄스터",
  color: "white",
  //size: "small",
};
//객체 리터럴 타입에 초과 프로퍼티를 넣으면 오류가 발생한다.

//합집합 타입(유니온)
let A: string | number | boolean;
let Arr: (string | number | boolean)[] = [1, "a", true];

type Cat = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};

type Union = Cat | Person;

let union1: Union = {
  name: "",
  language: "",
};
let union2: Union = {
  name: "",
  color: "",
  language: "",
};

//교집합 타입
type variable = number & string;
//never 타입이다.
type Intersection = Cat & Person;
let inter1: Intersection = {
  name: "",
  color: "",
  language: "",
};
//교집합이므로 모든 프로퍼티를 다 가지고 있는 객체만 포함된다.

//타입 추론
//초기값을 생략시 가장 넓은 any 타입으로 추론
//const의 경우 변경 불가능 하므로 가장 좁은 타입으로 추론
const num4 = 10;
//숫자 리터럴 타입으로 추론

//타입 단언
type PersonType = {
  name: string;
  age: number;
};
let person = {} as PersonType;
//person의 타입은 Person이라고 단언함
//타입 에러가 나지않음. !랑 비슷한 원리
let person2: PersonType = {
  name: "김자두",
  age: 20,
  job: "artist",
} as PersonType;
//초과 프로퍼티 에러도 피할 수 있다.

//A as B
//A가 B의 슈퍼타입이거나 서브 타입인 경우 가능
let cat = {
  name: "야옹",
  color: "yellow",
} as const;
//모든 프로퍼티가 readonly를 갖도록 단언됨

type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "게시글1",
};
const authorLength: number = post.author!.length;
//not null 단언

//타입 좁히기(타입 가드)
function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value == "string") {
    console.log(value.toUpperCase());
  }
}

function func2(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else {
    console.log(value.toUpperCase);
  }
}

//instanceof 타입가드
//내장 클래스 타입을 보장
function func3(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (value instanceof Date) {
    console.log(value.getDate());
  }
}

//in 타입가드
//직접 만든 타입과 함께 사용하려면 in 연산자를 이용함
type personType = {
  name: string;
  age: number;
};
function fun5(value: number | string | Date | personType) {
  if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

//서로소 유니온 타입
//교집합이 없는 타입들로 만든 교집합 타입
type Guest = {
  visitCount: number;
};
type Admin = {
  kickCount: number;
};
type Member = {
  point: number;
};
type UserType = Guest | Admin | Member;

function login(user: UserType) {
  if ("visitCount" in user) {
    console.log(`게스트의 방문횟수 : ${user.visitCount}`);
  } else if ("kickCount" in user) {
    console.log(`관리자의 방출 횟수: ${user.kickCount}`);
  } else {
    console.log(`멤버의 포인트: ${user.point}`);
  }
}

//가장 편한 방법은 공통된 프로퍼티를 하나 집어넣는 것
type GuestType = {
  tag: "GUEST";
  visitCount: number;
};
type AdminType = {
  tag: "ADMIN";
  kickCount: number;
};
type MemberType = {
  tag: "MEMBER";
  point: number;
};

// 함수의 인자 : 선택적 매개변수
function sendMessage(message: string, userName?: string) {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi");
function sendMessage2(message: string, userName: string = "EFUB") {
  console.log(`${message}, ${userName}`);
}
sendMessage("hi");

//호출 시그니처
let myFunc4: (arg1: number, arg2: number) => number;
myFunc4 = function (x, y) {
  return x + y;
};

//함수 호환성
type A = () => number;
type B = () => 1;
let aa: A = () => 1;
let bb: B = () => 1;
aa = bb;
//bb = aa;

//함수 오버로딩
function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}
console.log(add(1, 2));

//사용자 정의 타입 가드
interface IDeveloper {
  name: string;
  skill: string;
}

interface IPerson {
  name: string;
  age: number;
}

const introduce = (): IDeveloper | IPerson => {
  return { name: "Kim", age: 20, skill: "React" };
};

let kim = introduce();
/*
kim을 매개변수로 받아 kim의 타입이 Developer인지 판단하는 사용자 정의 타입 가드 함수 isDeveloper를 작성하세요.
*/

const isDeveloper = (target: IDeveloper | IPerson): target is IDeveloper => {
  return (target as IDeveloper).skill !== undefined;
};

if (isDeveloper(kim)) {
  console.log(kim.skill); //developer
} else {
  console.log(kim.age); //person
}

//인터페이스
interface test {
  [key: string]: number;
}

const test12: test = { anyone: 23, ddd: 22 };

//인터페이스 하이브리드 타입
interface IPerson {
  name: string;
}
interface Developer extends IPerson {
  skill: string;
}
interface FrontEndDeveloper extends Developer {
  stack: string;
}
let developer = {} as FrontEndDeveloper;
developer.name = "rin";
developer.skill = "javascript";
developer.stack = "react";

//인터페이스는 '선언적 확장'이 가능
