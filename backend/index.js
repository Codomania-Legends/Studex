const express = require("express")
const app = express()
const cors = require("cors")
const cookie_parser = require("cookie-parser")
const { connect_MySQL, sequelize } = require("./MySql/connection")

require("dotenv").config( { path : "./Security/secure.env" } )
const port = process.env.PORT

app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )
app.use( cookie_parser() )
app.use( cors() )

connect_MySQL()

app.get( "/" , ( req , res ) => {
    res.send("Hlllo")
} )

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
