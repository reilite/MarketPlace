const express = require("express");
const buyRouter = express.Router();

buyRouter.get("/test", (req, res) => {
  res.json({
    msg: "this is a test buy route",
  });
});

module.exports = buyRouter;
