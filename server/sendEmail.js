import nodemailer from  'nodemailer';
export async function send(req,res){
    try {
        const {email, text} = req.body;
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'testing133spam@gmail.com', // generated ethereal user
                pass: 'testing133spampass', // generated ethereal password
            },
        });

// send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'testing133spam@gmail.com', // sender address
            to: email, // list of receivers
            subject: "JOB", // Subject line
            text: text, // plain text body
            /*html: "<b>Hello world?</b>", */})// html body

    }catch (e) {
        res.status(500).json(e)
    }
}
