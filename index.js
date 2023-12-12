import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Body parse middleware
// app.use(bodyParser.urlencoded({ extended: true }));

//Set static folder
app.use(express.static("public"));

//GET index.ejs page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
