const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mehyar.abboud@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Error sending test email:', error);
    }
    console.log('Test email sent:', info.response);
});
