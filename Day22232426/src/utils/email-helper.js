//Responsible for sending emails
//egpn yxyi tzlj tmqa

import dotenv from "dotenv";
dotenv.config();
const { EMAIL_SERVICE_USER, EMAIL_SERVICE_PASS } = process.env;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  //secure: false, // true for port 465, false for other ports
  auth: {
    user: EMAIL_SERVICE_USER,
    pass: EMAIL_SERVICE_PASS,
  },
});

const sendEmail = async ({emails, subject, html}) => {
    try{
        const info = await transporter.sendMail({
            from: `"Ishanvi Chauhan" <ishanvi@gmail.com>`, // sender address
            to: emails, // list of receivers
            subject: subject, // Subject line
            html: html, // html body
        });
    }
    catch (error) {
        console.log("--------------");
        console.error("Could not send emails to:", emails);
        console.error("Error:", error);
        console.log("--------------");
    }
};

const sendOtpEmail = async ({otp, email}) => {
    await sendEmail({
        subject: "OTP Verification",
        emails: [email],
        html: `
            <html>
                <body>
                    <div style="display: flex; align-items: center; justify-content: center; background-color: #f0f0f0; padding: 2rem;">
                        <div style="padding: 2rem;">
                            <h2>OTP Verification</h2>
                            <p>Your OTP for verification is ${otp}</p>
                        </div>
                    </div>
                </body>
            </html>
        `
    })
}

module.exports = {
    sendOtpEmail,
}