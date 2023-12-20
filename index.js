import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const apiURL = "https://financialmodelingprep.com/api/v3/";
const apiKey = "0TNaihWKI2seN5FZslkwKYXll2Pe5JCN";

//Body parse middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Set static folder
app.use(express.static("public"));

//GET index.ejs page
app.get("/", async (req, res) => {
  res.render("index.ejs", { stockData: null });
});

//Post route to handle request for stock data posted to /sumbit-ticker
app.post("/submit-ticker", async (req, res) => {
  //Get ticker from form
  const ticker = req.body.ticker;

  //Pull stock data from API
  const response = await axios.get(apiURL + "quote/" + ticker + "?apikey=" + apiKey);

  //Log to console for debugging
  console.log(response.data[0].price);

  //Pass data to index.ejs
  res.render("index.ejs", { stockData: response.data });

});  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
