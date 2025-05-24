import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send OTP
router.post("/send-otp", async (req, res) => {
    const { phone } = req.body;

    try {
        const otpResponse = await client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({ to: phone, channel: "sms" });

        res.status(200).json({ message: "OTP sent successfully", sid: otpResponse.sid });
    } catch (error) {
        res.status(500).json({ error: "Failed to send OTP", details: error.message });
    }
});

router.post("/verify-otp", async (req, res) => {
    const { phone, otp } = req.body;

    try {
        const verificationCheck = await client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: phone, code: otp });

        console.log("Twilio Response:", verificationCheck); // ✅ Debugging

        if (verificationCheck.status === "approved") {
            return res.status(200).json({ message: "OTP verified successfully" });
        } else {
            return res.status(400).json({ error: "Invalid OTP", details: verificationCheck });
        }
    } catch (error) {
        res.status(500).json({ error: "OTP verification failed", details: error.message });
    }
});

export default router; // ✅ Use export default instead of module.exports
