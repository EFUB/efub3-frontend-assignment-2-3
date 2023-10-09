// never 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
