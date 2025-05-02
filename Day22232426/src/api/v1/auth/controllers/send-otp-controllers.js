/*
    POST : /api/v1/auth/otps (email in the body)
*/

const { sendOtpEmail } = require("../../../../utils/email-helper");
const { OtpModel } = require("../../../../models/otp-schema");
const bcrypt = require("bcryptjs");
const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;

    //only send otp when there is no otp sent earlier or it was sent more than 10 minutes ago


    // Generate a random OTP
    const otp = Math.floor(Math.random() * 9000 + 1000); // 4-digit OTP

    // Send the OTP email
    await sendOtpEmail({ otp, email });

    const salt = await bcrypt.genSalt(14);
    console.log("salt", salt);
    const hash = await bcrypt.hash(otp + "", salt);
    console.log("hash", hash);

    OtpModel.create({
        email: email,
        otp: otp,
    })

    res.status(200).json({ message: "OTP sent successfully"});
  } catch (error) {
    console.log("--------------")
    console.error("Error in sendOtpController:", error);
    console.log("--------------")
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

module.exports = { sendOtpController };
