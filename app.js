const { MongoClient } = require('mongodb');

// Mongodb 주소
const uri = 'mongodb://localhost:27017';

// uri 정보가 연결되어있는 클라이언트
const client = new MongoClient(uri);

async function run() {
  // DB 생성
  const database = client.db('firstDB2');
  // DB의 Collection 생성
  const users = database.collection('users2');

  // create 데이터 추가
  //   const userData = await users.insertOne({ name: 'bmc', age: 30 });
  //   console.log('result', userData);

  const userList = [
    { name: 'bmc', age: 30 },
    { name: 'jessica', age: 25 },
  ];

  const userListCreate = await users.insertMany(userList);
  console.log(userListCreate);
}

run();
