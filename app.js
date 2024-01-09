import express from "express";
import bodyParser from "body-parser";

import { assignmentRouter } from "./assignments.js";
import { accountsRouter } from "./accounts.js";


const app = express();
const port = 4000;

app.use(bodyParser.json());



app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

// Routers

// Assignments
app.use("/assignments", assignmentRouter);

// Accounts
app.use("/accounts", accountsRouter)

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
