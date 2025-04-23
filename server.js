import express from "express";
import publicRoutes from "./routes/public.js";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/api", publicRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
