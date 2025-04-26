import crypto from "crypto";

export const validatePayment = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
        hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const generated_signature = hmac.digest("hex");

        if (generated_signature !== razorpay_signature) {
            return res.status(400).json({ msg: "Transaction is not legit" });
        }

        return res.status(200).json({
            msg: "Payment verified successfully",
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
        });
    } catch (error) {
        console.error("Payment validation error:", error.message);
        return res.status(500).json({ msg: "Something went wrong" });
    }
};