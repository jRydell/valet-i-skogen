import Express from "express";
import mongoose from "mongoose";

const port = 3000;

const app = Express();
const apiRouter = Express.Router();

app.use(Express.static("../client/public/dist"));

apiRouter.get("*", (req, res) => {
  console.log("API request received");
  res.send(true);
});

app.use((req, res, next) => {
  console.log("Request received: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/animals", (req, res) => {
  res.send("Animals");
});

app.post("/animals", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
