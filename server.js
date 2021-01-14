const express = require('express')
// import DB
const connectDB = require('./config/initDB')
// import route
const routeUser = require('./routes/user')

// init express
const app = express()

// connect to DataBase
connectDB()

//middleware
app.use(express.json())

//middleware route
app.use('/', routeUser)

const port = process.env.PORT || 8080

app.listen(port, err=>{
    err? console.log(err): console.log(`server is running at the port: ${port}`);
})