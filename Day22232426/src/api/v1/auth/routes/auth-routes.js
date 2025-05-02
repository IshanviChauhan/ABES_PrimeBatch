const { sendOtpController } = require("../controllers/send-otp-controllers.js");
const express = require('express');

const authRouter = express.Router();

authRouter.post("/otp", sendOtpController);

module.exports = {
    authRouter,
}
