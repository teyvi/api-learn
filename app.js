import express from "express";
import dotenv from "dotenv";
import { country } from "./data.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 6780;

app.listen(PORT, () => {
  console.log(`express app is running ${PORT}`);
});

// console.log('countries', country);

app.get("/country", (req, res) => {
  res.send(country);
});

// app.get('/country/:id', (req, res) => {
//     const id = req.params.id
//     console.log('id is',id)
//     const foundData = country.find((item) => item.id == id)
//     res.send(foundData)
// })

app.get("/country/filter", (req, res) => {
  const foundData = country.filter((item) => item.hasMoney == true);
  res.send(foundData);
});

//return an array of countries
app.get("/country/name", (req, res) => {
  const countryName = country.map((item) => item.name);
  res.send(countryName);
});

app.get("/country/reverse", (req, res) => {
  res.send(country.reverse());
});

