const mongoose = require('mongoose');
// mongoose-test -> DB 이름
mongoose.connect('mongodb://localhost:27017/mongoose-test');
const validator = require('validator');
const { Schema } = mongoose;

// 회원 정보 Schema 구조
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true, // 필수값
    // email validate
    validate: {
      validator: (value) => {
        if (validator.isEmail(value)) {
          throw new Error('This is not an email');
        }
        // if (!value.includes('@')) {
        //   throw new Error('This is not an email');
        // }
      },
    },
  },
  password: {
    type: String,
    required: true, // 필수값
    trim: true, // 공백 제거
  },
  age: {
    type: Number,
    default: 0, // 기본값 0
  },
});

// 모델 이름 User, userSchema를 통해 만듦
// collection 생성
const User = mongoose.model('User', userSchema);

// 값 저장 create
const newUser = new User({ name: 'bmc', email: '1234@gmail.com', password: 12345, age: 30 });
newUser.save().then((value) => console.log('value is ', value));

// 값 불러오기 read
User.find().then((value) => console.log('data', value));
