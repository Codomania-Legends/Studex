const express = require("express")
const app = express()
const cors = require("cors")
const cookie_parser = require("cookie-parser")
const { connect_MySQL, sequelize } = require("./MySql/connection")
const { UserRouter } = require("./Routes/user")
const { CourseRouter } = require("./Routes/course")
const { FeesRouter } = require("./Routes/fees")

require("dotenv").config( { path : "./Security/secure.env" } )
const port = process.env.PORT

app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )
app.use( cookie_parser() )
app.use( cors() )

connect_MySQL()

app.use( "/user" , UserRouter )
app.use( "/course" , CourseRouter )
app.use( "/fees" , FeesRouter )

app.listen( port , async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('✅ DB connected & synced');
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    } catch( err ){
        console.error('❌ DB connection error:', err);
    }
} )
