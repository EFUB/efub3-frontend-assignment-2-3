//타입 호환성
//업캐스팅
//더큰 number 타입에 리터럴 타입의 값을 할당 가능
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//다운캐스팅
//더 작은 리터럴 타입에 number 타입의 값을 할당 불가능
let num3: number = 10;
let num4: 10 = 10; //
// num4 = num1;

//unknown
//전체 집합의 가장 최상단에 위치함
//모든 타입은 unknown으로 업캐스트 가능
//unknown은 모든 타입의 값을 다 담을 수 있다.
let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = null;
let e: unknown = undefined;
let f: unknown = [];
let g: unknown = {};
let h: unknown = () => {};

//모든 타입 다운 캐스트 불가능
// unknown은 모든 타입을 포함하기 때문에 다른 타입이 품을 수 x
let unknown2: unknown;
//let c : number = unknown2 //error

//never
//타입 계층도의 가장 아래 위치 (공집합)
//unknown과 반대
//never 타입은 모든 타입으로 업캐스팅 가능
//어떠한 타입도 never 값을 품을 수 있다.
let neverVar: never;

let one: number = neverVar;
let two: string = neverVar;
let three: boolean = neverVar;
let four: null = neverVar;
let five: undefined = neverVar;
let six: [] = neverVar;
let seven: {} = neverVar;

//그 어떤 타입도 never 타입으로 다운캐스팅 불가능
//never 타입에는 어떠한 값도 할당 할 수 없다.
//공집합이기 때문이다.
//let e: never = 1; //error

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

//객체타입의 호환성

//슈퍼타입
type Animal = {
  name: string;
  color: string;
};

//서브 타입
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
//더 범위가 큰 슈퍼 타입에 서브 타입의 값을 할당 가능

//dog = animal;  ❌
//더 범위가 작은 서브 타입에 슈퍼 타입의 값을 할당 불가능

//객체 타입의 호환성 : 초과 프로퍼티 검사
let hamster: Animal = {
  name: "햄스터",
  color: "white",
  //size: "small",  ❌
};
//객체 리터럴 타입에 초과 프로퍼티를 넣으면 오류가 발생한다.

//합집합 타입(유니온)
let A: string | number | boolean;
A = 1;
A = "hi";
A = true;

//유니온 타입으로 배열 타입도 정의 가능
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
//숫자 리터럴 타입으로 추론

// function func(param){

// }
//❌ 함수의 매개변수 타입은 자동으로 추론 불가능

let User = {
  id: 1,
  name: "오렌지",
  profile: {
    nickname: "orange",
  },
};

let { id, name, profile } = User;
let [One, Two, Three] = [1, "hello", true];

//초기값을 생략시 암시적인 any 타입으로 추론
let Any;
//any 타입

Any = "hello"; //string
Any.toUpperCase();

//any의 진화 : 값 할당을 통해 계속 타입이 진화함.

const num = 10;
console.log(typeof num); //10
//const는 초기화 때 설정한 값이 변경될 수 없기에 가장 좁은 타입으로 추론됨

let arr = [1, "string"];
//(string | number)[] 타입으로 추론

//타입 단언
type PersonType = {
  name: string;
  age: number;
};

let person = {} as PersonType;
//person의 타입은 Person이라고 단언함
//빈객체여도 타입 에러가 나지않음. !랑 비슷한 원리
let person2: PersonType = {
  name: "김자두",
  age: 20,
  job: "artist",
} as PersonType;
//초과 프로퍼티 에러도 피할 수 있다.

type DogType = {
  name: string;
  color: string;
};

let dog1: DogType = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //✅원래 에러가 나지만 as Dog로 타입을 단언해서 에러 피함
} as Dog;

//A as B
//A가 B의 슈퍼타입이거나 서브 타입인 경우 가능
let num10 = 10 as never;
let num11 = 10 as unknown;
// let num12 = 10 as string; //❌

let cat = {
  name: "야옹",
  color: "yellow",
} as const;
//모든 프로퍼티가 readonly를 갖도록 단언됨

//not null 단언
type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "게시글1",
};
const authorLength: number = post.author!.length;

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

type User = GuestType | AdminType | MemberType;

function auth(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.kickCount}`);
  } else if (user.tag === "GUEST") {
    console.log(`${user.visitCount}`);
  } else {
    console.log(`${user.point}`);
  }
}
