// 인터페이스
interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
const student1: User = {
  age: 100,
  name: "user",
};

// 옵셔널 프로퍼티
interface TestType {
  test: string;
  test2?: number;
}

let testProp = {
  test: "test",
};

function testFunc(param: TestType) {
  console.log(param.test);
}

testFunc(testProp);

// 읽기 전용 프로퍼티
interface ReadOnly {
  readonly test: string;
}

let param2: ReadOnly = {
  test: "test2",
};
//param2.test = 'test3'; 오류

// 정의되지 않은 속성의 사용
interface test {
  [key: string]: number;
}
const test: test = { anyone: 33, ddd: 22 };

// 함수 타입
interface test2 {
  (test1: string, test2: number): boolean;
}

const test3: test2 = (a, b) => {
  console.log(a, b);
  return true;
};

test3("a", 2);

// 하이브리드 타입
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = function (beer: string) {} as CraftBeer;
  my.brand = "Beer Kitchen";
  my.brew = function () {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer("My First Beer");
brewedBeer.brand = "Pangyo Craft";
brewedBeer.brew();

// 인터페이스의 확장
interface Person {
  name: string;
}

interface Drinker extends Person {
  drink: string;
}

interface Developer extends Drinker {
  skill: string;
}

let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
fe.drink = "Beer";

// 인터페이스 선언 합치기
interface PeopleInterface {
  name: string;
  age: number;
}

interface StudentInterface extends PeopleInterface {
  school: string;
}

const me1: PeopleInterface = {
  name: "yc",
  age: 34,
};

type PeopleType = {
  name: string;
  age: number;
};

type StudentType = PeopleType & {
  school: string;
};

const me2: PeopleType = {
  name: "yc",
  age: 31,
};

// 같은 이름으로 다시 선언하여 확장 가능
interface Window {
  title: string;
}

interface Window {
  ts: string;
}
