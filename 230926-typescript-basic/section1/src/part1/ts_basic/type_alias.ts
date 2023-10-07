// 타입 별칭
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
  name: '이정환',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

// type User = {}; 스코프가 같으므로 중복된 이름 불가
function test() {
  type User = string; // 스코프가 다르므로 가능
}
