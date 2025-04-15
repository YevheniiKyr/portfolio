require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        const { email, message, phone, name } = JSON.parse(event.body);

        function createText() {
            return (
                message +
                "\n" +
                "Contacts:\n" +
                `email: ${email}` +
                "  " +
                `phone: ${phone}`
            );
        }

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_LOGIN,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const resultTextOfMessage = createText();

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL_RECIEVER,
            subject: `JOB OFFER: message from ${name}`,
            text: resultTextOfMessage,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
        };
    } catch (error) {
        console.error("Email error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email", details: error.message }),
        };
    }
};
