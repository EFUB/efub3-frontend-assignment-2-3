let user: {
  id?: number;
  readonly name: string; // read only property
} = {
  id: 1,
  name: '이정환',
};

//user.name = "aaa"; // 오류 발생
