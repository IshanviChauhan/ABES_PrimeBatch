/*
    POST : /api/v1/auth/otps (email in the body)
*/

const sendOtpController = async (req, res) => {
    const { email } = req.body;

    const otp = Math.floor(Math.random() * (9000)) + 1000;

    await sendOtpEmail({ otp, email });
}

module.exports = {
    sendOtpController,
}
