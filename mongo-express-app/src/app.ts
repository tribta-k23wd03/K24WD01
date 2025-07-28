import express from "express";

const app = express();

app.use(express.json());

// app.use("/api/auth");

export default app;
