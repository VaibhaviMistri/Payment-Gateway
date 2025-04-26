import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import paymentRoute from './Routes/paymentRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", paymentRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});