const mysql = require("mysql")
require("dotenv").config({path : "../Security/secure.env"})

const DB = mysql.createConnection({
    host : process.env.DB_HOST ,
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD ,
    database : process.env.DB_NAME
})

DB.connect( (err) => {
    if( err ) console.log("Error connecting mySql , " , err)
    console.log("MySql connected")
} )

module.exports = {
    DB
}
