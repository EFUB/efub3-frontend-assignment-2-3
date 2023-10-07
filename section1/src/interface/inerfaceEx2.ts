// 인터페이스 확장하기

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
fe.name = "djks";
fe.skill = "장풍";
fe.drink = "beer";
