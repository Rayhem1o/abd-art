const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

async function sendTestEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'mehyar.abboud@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email.'
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending test email:', error);
    }
}

sendTestEmail();
