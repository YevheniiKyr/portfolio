const nodemailer = require('nodemailer');

async function send(req, res) {
    console.log(req.body)

    try {
        const myEmail = "jekafekz@gmail.com";
        const {email, message, phone, name} = req.body;
        function createText() {
            return message + '\n' + 'Contacts:' + '\n' + ` email: ${email}` + '  ' + `phone: ${phone}`;
        }

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_LOGIN, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        });
        const resultTextOfMessage = createText();

        let info = await transporter.sendMail({
            from: 'testing133spam@gmail.com', // sender address
            to: myEmail, // list of receivers
            subject: `JOB OFFER: message from ${name}`, // Subject line
            text: resultTextOfMessage, // plain text body

        })
        res.status(200).json("Email sent")
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = {send}