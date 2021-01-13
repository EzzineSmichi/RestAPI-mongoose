const mongoose = require('mongoose')
const config = require('config')

const initDB = () =>{
    mongoose.connect(config.get("DATABASE_URL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connection to DataBase established'))
    .catch((error) => console.log(error));
}

module.exports = initDB;