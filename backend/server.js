import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import { connectDb} from "./config/dbConnection.js"

dotenv.config();

const PORT = process.env.PORT;
const app = express();  

connectDb();

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});   