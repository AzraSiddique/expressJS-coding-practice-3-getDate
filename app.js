const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const getDate = new Date();
  response.send(
    `${getDate.getDate()}-${getDate.getMonth() + 1}-${getDate.getFullYear()}`
  );
});
module.exports = app;
