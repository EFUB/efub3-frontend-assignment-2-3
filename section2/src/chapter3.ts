// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "김아무개",
  nickname: "kimmi",
  birth: "1998.09.12",
  bio: "hihi",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "박아무개",
  nickname: "parrrk",
  birth: "1995.09.12",
  bio: "hellllo",
  location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
  //   Korea: string;
  //   UnitesState: string;
  //   UnitedKingdom: string;
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitesState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitesState: 840,
  UnitedKingdom: 826,
};
