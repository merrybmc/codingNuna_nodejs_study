// const { MongoClient } = require('mongodb');

// 이것도 될까?
import { MongoClient } from 'mongodb';

// Mongodb 주소
const uri = 'mondodb://localhost:27017';

// uri 정보가 연결되어있는 클라이언트
const client = new MongoClient(uri);

function run() {
  // DB 생성
  const database = client.database('firstDB2');
  // DB의 Collection 생성
  const collection = database.collection('users2');
}
