interface User {
  age: number;
  name: string;
}

const student1: User = {
  age: 100,
  name: "JIMIN",
};

interface TestType {
  test: string;
  test2?: number;
}

let testProp = {
  test: "TTTT",
};

function testFunc(param: TestType) {
  console.log(param.test);
}

testFunc(testProp);

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
brewedBeer("My first beer");
brewedBeer.brand = "Pangyo Craft";
brewedBeer.brew();

interface Person {
  name: string;
}

interface Drinker extends Person {
  drink: string;
}

interface Developer extends Drinker {
  skill: string;
}

interface Chicken extends Animal {
  isFly: boolean;
}

let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
fe.drink = "Beer";
