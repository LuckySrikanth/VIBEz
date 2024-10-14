const express = require("express");
const cors = require("cors");
const dbConncect = require("./config/db");
const userRouter = require("./Routes/userRoute");
const cartRouter = require("./Routes/cartRoute");
const orderRouter = require("./Routes/orderRoute");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: "https://vibez-web.onrender.com" }));

dotenv.config();

app.use("/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

dbConncect();

app.listen(5000, () => {
  console.log(`server running in 5000 port`);
});
