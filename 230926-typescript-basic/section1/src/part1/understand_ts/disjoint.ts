// 서로소 유니온 타입
type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if ('kickCount' in user) {
    // user.tag === "ADMIN"
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ('point' in user) {
    // user.tag === "MEMBER"
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다`);
  } else {
    // user.tag === "GUEST"
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}
