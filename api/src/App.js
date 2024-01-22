import express from "express";
import cors from "cors";
import router from "./app/routes/routes.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(morgan("tiny"));

export default app;
