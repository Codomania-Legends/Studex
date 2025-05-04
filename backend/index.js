const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../Security/secure.env") });

const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { sequelize } = require("./MySql/connection.js")
const { UserRouter } = require("./Routes/user")
const { CourseRouter } = require("./Routes/course")
const { FeesRouter } = require("./Routes/fees")

const port = process.env.PORT || 5000

app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )
app.use( cookieParser() )
app.use( cors() )

app.use( "/user" , UserRouter )
app.use( "/course" , CourseRouter )
app.use( "/fees" , FeesRouter )

app.listen( port , async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('✅ DB connected & synced');
        console.log(`🚀 Server running on http://localhost:${port}`);
    } catch( err ){
        console.error('❌ DB connection error:', err);
    }
} )
