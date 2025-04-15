require(`dotenv`).config()

const express = require('express')
const cors = require("cors")
const {send} = require("./sendEmail");
const serverless = require('serverless-http')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.post('api/send-message', send);

app.listen(PORT, ()=>console.log("server is started on Port", PORT))

module.exports.handler = serverless(app)