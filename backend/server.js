const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const paymentRoute = require("./routes/paymentRoutes");
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
