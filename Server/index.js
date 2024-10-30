const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./model/Todo");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://sureshmadhushanka11:2020@cluster0.pghhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

app.post("/add", async (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(Error));
});

app.get("/get", async (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(Error));
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Sever is Running");
});
