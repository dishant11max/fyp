import express from "express";
import cors from "cors";
import executeRoutes from "./routes/execute.routes.js";
const app = express();

app.use(cors({
  origin:"http://localhost:5173",
}
));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DotRepl backend running");
});

app.use("/api/execute", executeRoutes);
export default app;



