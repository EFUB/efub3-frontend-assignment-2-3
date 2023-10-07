/* type CountryCodes = {
    Korea: string;
    UnitedState: string;
    UnitedKingdom: string;
    // (... 약 100개의 국가)
    Brazil: string;
}; */

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // (... 약 100개의 국가)
  Brazil: 'bz',
};
