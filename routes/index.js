const express = require("express");
const path = require("path");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  // res.json({ msg: "json was send" });
  res.sendFile(
    path.join(__dirname, "..", "public", "rest-api-app", "index.html")
  );
});

module.exports = router;