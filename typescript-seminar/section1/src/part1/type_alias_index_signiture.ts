// Type Alias (타입 별칭)

// 타입 별칭을 이용하면 다음과 같이 변수를 선언하듯 타입을 별도로 정의할 수 있음

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// type User = {}; // 스코프가 같으므로 중복된 이름 불가

function test() {
  type User = string; // 스코프가 다르므로 중복된 이름 가능
}

// Index Signature (인덱스 시그니처)

// 인덱스 시그니쳐는 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
//   // (... 약 100개의 국가)
//   Brazil : string
// };

// 일일이 타입 명시할 필요 없음
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};
