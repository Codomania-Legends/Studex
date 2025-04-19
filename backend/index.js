const express = require("express")
const app = express()
const cors = require("cors")
const cookie_parser = require("cookie-parser")

require("dotenv").config( { path : "./Security/secure.env" } )
const port = process.env.PORT

app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )
app.use( cookie_parser() )
app.use( cors() )

app.get( "/" , ( req , res ) => {
    res.send("Hlllo")
} )

app.listen( port , () => console.log(`Server started at ${port}`) )
