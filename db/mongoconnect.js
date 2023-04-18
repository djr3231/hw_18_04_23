const mongoose = require ('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/db_hw_18_04_23');
  console.log("mongo connect idf8 local")
}

