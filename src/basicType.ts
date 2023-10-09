//원시 타입

//number
let num1: number = -1.23;
let num2: number = Infinity;
let num3: number = NaN;
//string
let str1: string = "name";
let str2: string = `hello ${str1}`;
//boolean
let bool1: boolean = true;
let bool2: boolean = false;
//undefined
let unde1: undefined = undefined;
//null
let null1: null = null;
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

//읽기전용 프로퍼티
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
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let userOne: User = {
  id: 1,
  name: "강아지",
  nickname: "토토",
  birth: "2023-10-07",
  bio: "멍멍",
  location: "서울시",
};
let userTwo: User = {
  id: 2,
  name: "고양이",
  nickname: "토리",
  birth: "2023-10-07",
  bio: "냐옹",
  location: "부산시",
};

function test() {
  type User = string;
}
//스코프가 다르면 같은 변수의 타입 선언 가능

//인덱스 시그니쳐(Enum)
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

//any
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num10: number = 10;
num10 = anyVar;

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
function fun2(): void {
  console.log("hello");
}

let v: void;
v = undefined;
v = null;

//never 타입
//함수가 어떠한 값도 반환할 수 없는 상황에서 반환값 타입
//any를 포함해 그 어떠한 타입의 값도 never 타입 변수에 할당 불가
function fun3(): never {
  while (true) {}
}
function fun4(): never {
  throw new Error();
}
