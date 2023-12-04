const express = require('express')
const cors = require("cors")
const {send} = require("./sendEmail");

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.post('/send-message', send);

app.listen(PORT, ()=>console.log("server is started on Port", PORT))
