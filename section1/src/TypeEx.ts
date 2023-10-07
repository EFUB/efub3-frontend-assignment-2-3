//배열 타입
let numArr: number[] = [1, 2, 3];
let boolArr: Array<boolean> = [true, false, true];
let multiArr: (number | string)[] = [1, "hello"];
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 타입
let tup1: [number, string, boolean] = [1, "현수", true];
//배열의 개수와 태입이 고정되어있다.

const users: [string, number][] = [
  ["어쩌구", 1],
  ["어쩌구", 2],
  ["어쩌구", 3],
  // [4,"저쩌구"] 순서 바뀌면 오류발생!
];

//객체 리터럴 타입
let user: {
  id: number;
  name: string; //프로퍼티의 타입 나열
} = {
  id: 1,
  name: "gustn",
};
user.id;

//선택적 프로퍼티
let user1: {
  id?: number; // 선택적 프로퍼티
  name: string; //프로퍼티의 타입 나열
} = {
  id: 1,
  name: "gustn",
};

user1 = {
  name: "현수",
}; //id 생략되었다

//읽기전용 프로퍼티
let user2: {
  id?: number; // 선택적 프로퍼티
  readonly name: string; //readonly 프로퍼티
} = {
  id: 1,
  name: "gustn",
};

// user2.name = "djkdj"; // 오류 발생

// 타입 별칭
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
};
let user4: User = {
  id: 1,
  name: "gustn",
  birth: "2002.0101",
  bio: "안녕하세요",
};

// 인덱스 시그니쳐
//key와 value가 모두 string일 경우
type Country = {
  // korea: string
  // uk: string;
  // us: string;
  // canada: string;  이렇게 나타내는 대신

  [key: string]: string;
};

let country: Country = {
  korea: "ko",
  uk: "uk",
  us: "us",
  canada: "ca",
};

// 열거형 타입
enum Role {
  ADMIN, //자동으로 0할당
  USER, //1 할당
  GUEST, //2할당
}
enum Language {
  korean = "ko",
  english = "en",
}
const user6 = {
  name: "gustn",
  role: Role.ADMIN,
  language: Language.korean,
};

//any 타입
let anyVar: any = 10;
anyVar = "hello";
anyVar = {};

//unknown 타입
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
let num: number = 10;
//num = unknownVar; //오류!! : 어떤 타입에도 unknown 할당 불가능

//void 타입
function myfunc(): void {
  console.log("hello");
}

//never 타입
function myfunc2(): never {
  throw new Error();
}
