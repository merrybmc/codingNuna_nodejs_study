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

  // 데이터 여러 개 추가
  //   const userList = [
  //     { name: 'bmc', age: 30 },
  //     { name: 'jessica', age: 25 },
  //   ];

  //   const userListCreate = await users.insertMany(userList);
  //   console.log(userListCreate);

  // 모든 데이터 가져오기
  //   const findAll = await users.find().toArray();
  //   console.log(findAll);

  // key 값을 통해 조건에 해당하는 제일 앞의 데이터 1개 찾기
  //   const findUser = await users.findOne({ name: 'bmc' });
  //   console.log(findUser);

  // 조건에 해당하는 모든 데이터 가져오기
  // Query Operation $gt: number -> 이상의 값 찾기
  // Reference
  // https://www.w3schools.com/mongodb/mongodb_query_operators.php
  // https://www.mongodb.com/docs/manual/reference/operator/query/
  const findAllUser = await users.find({ age: { $gt: 20 } }).toArray();
  console.log(findAllUser);
}

run();
