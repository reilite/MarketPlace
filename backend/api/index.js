const express = require("express");
const sellRouter = require("./routes/seller");
const buyRouter = require("./routes/buyer");
const apiRouter = express.Router();

apiRouter.get("/test", (req, res) => {
  res.json({
    msg: "sthis is a api test route",
  });
});

apiRouter.use("/sell", sellRouter);
apiRouter.use("/buy", buyRouter);

module.exports = apiRouter;
