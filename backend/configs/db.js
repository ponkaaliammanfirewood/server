const mongoose = require('mongoose');
// const mongoose1=require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Connected to yourbank database');
  }).catch((err) => {
    console.error(err);
  });
