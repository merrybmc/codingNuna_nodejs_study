const mongoose = require('mongoose');
// mongoose-test -> DB 이름
mongoose.connect('mongodb://localhost:27017/mongoose-test');

const { Schema } = mongoose;

// 회원 정보 Schema 구조
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// 모델 이름 User, userSchema를 통해 만듦
// collection 생성
const User = mongoose.model('User', userSchema);

// 값 저장 create
const newUser = new User({ name: 'bmc', email: '123@gmail.com', password: 12345, age: 30 });
newUser.save().then((value) => console.log('value is ', value));
