import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { makeCall } from "./twilio_service.js";

dotenv.config()

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.post("/call", async (req, res) => {
    const { call_after, phone } = req.body;
    let val = null;
    setTimeout(async () => {
        val = await makeCall(phone);
        res.send(val);
    }, call_after*1000)
});

export default app;
