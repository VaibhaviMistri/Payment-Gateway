const API_BASE = process.env.REACT_APP_API_BAZE; 

export const createOrder = async ({ amount, currency, receipt }) => {
    try {
        const response = await fetch(`${API_BASE}/order`, {
            method: "POST",
            body: JSON.stringify({ amount, currency, receipt }),
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to create order");

        return await response.json();
    } catch (err) {
        console.error("Error creating order:", err);
        throw err;
    }
};

export const validateOrder = async (paymentResponse) => {
    try {
        const response = await fetch(`${API_BASE}/order/validate`, {
            method: "POST",
            body: JSON.stringify(paymentResponse),
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to validate payment");

        return await response.json();
    } catch (err) {
        console.error("Error validating payment:", err);
        throw err;
    }
};
