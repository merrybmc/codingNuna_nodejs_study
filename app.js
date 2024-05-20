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
  /**
  // create 데이터 추가
  // const userData = await users.insertOne({ name: 'bmc', age: 30 });
  // console.log('result', userData);

  // 데이터 여러 개 추가
  // const userList = [
  //   { name: 'bmc', age: 30 },
  //   { name: 'jessica', age: 25 },
  // ];

  // const userListCreate = await users.insertMany(userList);
  // console.log(userListCreate);

  // 모든 데이터 가져오기
  // const findAll = await users.find().toArray();
  // console.log(findAll);

  // key 값을 통해 조건에 해당하는 제일 앞의 데이터 1개 찾기
  // const findUser = await users.findOne({ name: 'bmc' });
  // console.log(findUser);

  // 조건에 해당하는 모든 데이터 가져오기
  // Query Operation $gt: number -> 이상의 값 찾기
  // Reference
  // https://www.w3schools.com/mongodb/mongodb_query_operators.php
  // https://www.mongodb.com/docs/manual/reference/operator/query/
  // const findAllUser = await users.find({ age: { $gt: 20 } }).toArray();
  // console.log(findAllUser);

  // update 데이터 수정
  // parameter 1 - 조건, parameter 2 - 수정할 데이터
  // const updateUser = await users.updateOne({ name: 'bmc' }, { $set: { age: 17 } });
  // console.log(updateUser);

  // delete 데이터 삭제
  // const deleteUser = await users.deleteMany({ age: { $gt: 20 } });
  // console.log(deleteUser);

  // project({ key: 0 }) - 해당 키 값은 제외하고 데이터 보여주기
  //   const userData = await users.find({ name: 'bmc' }).project({ _id: 0 }).toArray();
  //   console.log(userData);
 */

  // DB의 Collection 생성
  const inventory = database.collection('inventory2');

  // 문제 1. insertOne
  // const userData = inventory.insertOne({
  //   item: 'canvas',
  //   qty: 100,
  //   tags: ['cotton'],
  //   size: { h: 28, w: 35.5, uom: 'cm' },
  // });

  // 문제 2. insertMany
  // const userManyData = inventory.insertMany([
  //   { item: 'journal', qty: 25, tags: ['blank', 'red'], size: { h: 14, w: 21, uom: 'cm' } },
  //   { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } },
  //   { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm' } },
  // ]);

  // 문제 3. find
  // const readUser = await inventory.find().toArray();
  // console.log(readUser);

  // 문제 4. find condition
  // const userManyData = await inventory.insertMany([
  //   { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },
  //   { item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'B' },
  //   { item: 'paper', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },
  //   { item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm' }, status: 'D' },
  //   { item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm' }, status: 'A' },
  // ]);

  // const findUserCondition = await inventory.find({ status: 'D' }).toArray();

  // 문제 5. find condition
  // const findUserCondition = await inventory.find({ status: 'A', qty: 50 }).toArray();

  // 문제 6. query operator $in
  // const findUserCondition = await inventory.find({ status: { $in: ['A', 'B'] } }).toArray();

  // 문제 7. query operator $lt
  // const findUserCondition = await inventory.find({ status: 'A', qty: { $lt: 30 } }).toArray();

  // 문제 8. query operator $or
  // const findUserCondition = await inventory
  //   .find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }] })
  //   .toArray();

  // 문제 9. nested field
  // const findUserCondition = await inventory.find({ 'size.uom': 'in' }).toArray();

  // 문제 10.nested field, query operator $gt
  // const findUserCondition = await inventory.find({ 'size.h': { $gt: 10 } }).toArray();

  console.log(findUserCondition);
}

run();
