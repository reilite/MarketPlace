const express = require("express");
const sellRouter = express.Router();

sellRouter.get("/test", (req, res) => {
  res.json({
    msg: "this is a sell test route",
  });
});

module.exports = sellRouter;
