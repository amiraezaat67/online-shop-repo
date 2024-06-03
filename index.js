import express from "express";
import userRouter from "./src/modules/User/user.routes.js";
import productRouter from "./src/modules/product/product.routes.js";
import { db_connection } from "./DB/connection.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

db_connection();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
