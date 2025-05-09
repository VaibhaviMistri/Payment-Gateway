import Razorpay from 'razorpay';

export const createOrder = async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send("error hello");
        }

        res.json(order);
    } catch (error) {
        console.log("error");
        return res.status(500).send("error");
    }
};