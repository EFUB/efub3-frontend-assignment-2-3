interface User {
  age: number;
  name: string;
}

const student1: User = {
  age: 100,
  name: 'JIMIN',
};

interface TestType {
  test: string;
  test2?: number;
}

let testProp = {
  test: 'tttt',
};

function testFunc(param: TestType) {
  console.log(param.test); // tttt
}
testFunc(testProp);

interface ReadOnly {
  readonly test: string;
}

let param: ReadOnly = {
  test: 'test3',
};
// param.test = "test4"; // 에러

interface test {
  [key: string]: number;
}
const test: test = { anyone: 33, ddd: 22 };

interface test_ {
  (test1: string, test2: number): boolean;
}
const test3: test_ = (a, b) => {
  console.log(a, b);
  return true;
};
test3('a', 2);

// 하이브리드 타입
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = function (beer: string) {} as CraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function () {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
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
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';

// 인터페이스 선언 합치기
interface PeopleInterface {
  name: string;
  age: number;
}

const me1: PeopleInterface = {
  name: 'yc',
  age: 34,
};

type PeopleType = {
  name: string;
  age: number;
};

const me2: PeopleType = {
  name: 'yc',
  age: 31,
};

interface StudentInterface extends PeopleInterface {
  school: string;
}

type StudentType = PeopleType & {
  school: string;
};

interface Window {
  title: string;
}

interface Window {
  ts: 'TypeScriptAPI';
}
