const express = require("express");
const app = express();
const port = 3000;

/**
 * range: [ -99999, 99999 ]
 * six characters, including the signal
 * */

app.get("/:id", (req, res) => {
  // make a copy of value, without modifying it directly
  const value = req.params.id; 
  const copy = [...value];
  const orders = [
    { 0: "", 1: "um", 2: "dois", 3: "tres", 4: "quatro" },
    { 0: "", 1: "dez", 2: "vinte", 3: "trinta", 4: "quarenta" },
    { 0: "", 1: "cem", 2: "duzentos", 3: "trezentos", 4: "quatrocentos" }
  ];

  const slicedArray = Array.from(copy);
  const element = parseInt(slicedArray[0]);

  const mapElementToOrder = slicedArray.map((el, index) => orders[slicedArray.length - index - 1][slicedArray[index]]);

  return res.send(`{ id: ${mapElementToOrder} }`);
});

app.listen(port, () => console.log(`You can now visit the app at http://localhost:${port}`)); 
