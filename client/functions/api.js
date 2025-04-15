require(`dotenv`).config()

const express = require('express')
const cors = require("cors")
const {send} = require("./sendEmail");
const serverless = require('serverless-http')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/send-message', send);

module.exports.handler = serverless(app)