import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { makeCall } from "./twilio_service.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.post("/call", async (req, res) => {
    const { time, phone } = req.body;
    const val = await makeCall(phone);
    res.send(val);
});

export default app;