# Razorpay Payment Gateway Integration

This project demonstrates the integration of the Razorpay payment gateway for an e-commerce application. It includes both the **backend** (Node.js) and **frontend** (React) to manage payments securely.

## Backend Functionality (Node.js)

The backend is responsible for managing orders and payment validation.

### Key Features:
- **Order Creation**: Generates an order with Razorpay's API when a request is made with the amount, currency, and receipt details.
- **Payment Validation**: Verifies the payment by checking the Razorpay signature using the server-side generated hash.
- **Error Handling**: Handles any errors related to order creation or payment validation and provides appropriate responses.

### Technologies Used:
- **Node.js** & **Express.js**
- **Razorpay API**
- **Crypto module** for signature validation

## Frontend Functionality (React)

The frontend is responsible for triggering the Razorpay checkout interface and handling user interactions.

### Key Features:
- **Payment Flow**: Displays the Razorpay checkout modal and triggers the payment process.
- **Order Creation**: Sends the required data to the backend to create an order.
- **Payment Validation**: Once the payment is completed, the frontend sends payment details to the backend to verify payment success.

### Technologies Used:
- **React**
- **Razorpay Checkout**

---

## Setup Instructions

### Backend Setup:
1. Navigate to the `server` directory:
    ```bash
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
    ```

## Running the Application

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