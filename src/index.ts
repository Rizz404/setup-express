import express from "express";
import { test } from "@/test/test";
const PORT = process.env.port || 5000;
const app = express();
test();

app.use("/", (req, res) => {
  res.send("helo");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
