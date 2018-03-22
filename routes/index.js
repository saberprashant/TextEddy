const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html').status(200);
});
module.exports = router;