var express = require("express");
var router = express.Router();
let userschema = require("../Schema/schema");

/* GET home page. */
router.get("/display", async function (req, res) {
  try {
    const result = await userschema.find();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/post", async function (req, res) {
  try {
    console.log(req.body);
    const result = await userschema.create(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
