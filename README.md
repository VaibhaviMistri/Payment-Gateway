#Backend Setup
    cd server
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```

### Frontend Setup:
1. Navigate to the `client` directory:
    ```bash
    cd client
    ```
2. Install the required dependencies:
    ```bash
    npm install

### Start the Express Backend:
1. In the terminal, navigate to the `server` folder and start the backend server:
    ```bash
    cd server
    node --watch index.js
    ```

### Start the React Frontend:
1. In a new terminal window, navigate to the `client` folder and start the frontend development server:
    ```bash
    cd client
    npm start
    ```

This will allow you to run both the backend and frontend servers concurrently.

---

## Summary of the Payment Flow:
1. The user clicks the "Pay" button on the frontend.
2. The frontend calls the backend to create an order.
3. Upon successful order creation, Razorpay's checkout window is triggered.
4. The user completes the payment in the Razorpay interface.
5. The frontend sends the payment details to the backend for validation.
6. The backend verifies the payment signature and responds with success or failure.
7. The frontend displays the payment status to the user.