import apple from '../assets/apple.png';
import { useState } from 'react';
import { createOrder, validateOrder } from "../services/paymentService.js";

export const Product = () => {
    const [loading, setLoading] = useState(false);

    const amount = 500;
    const currency = "INR";
    const receipt = "qwsaq1";

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const order = await createOrder({ amount, currency, receipt });

            if (!order.id) {
                alert("Order creation failed.");
                return;
            }

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY,
                amount,
                currency,
                name: "Vaibhavi",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order.id,
                handler: async (response) => {
                    const paymentData = { ...response };
                    const jsonRes = await validateOrder(paymentData);
                    console.log(jsonRes);
                    if (jsonRes.msg === "success") {
                        alert("Payment successful!");
                    }
                },
                prefill: {
                    name: "ABC",
                    email: "vaibhavimistri11@gmail.com",
                    contact: "9924437222"
                },
                notes: {
                    address: "ABC"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", (response) => {
                console.error('Payment failed', response.error);
                alert('Something went wrong. Please try again.');
            });
            rzp1.open();
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Apple</h2>
            <img
                src={apple}
                alt="Apple"
                style={{
                    height: "10rem",
                    width: "10rem"
                }}
            />
            <button onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Pay"}
            </button>
        </>
    );
};
