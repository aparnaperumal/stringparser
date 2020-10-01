var express = require('express');
var router = express.Router();
const controller = require("../controller/controller")

/* GET home page. */
router.get("/", controller.renderHomePage)
router.post("/v1/parse", controller.getStringversionOne)
router.post("/v2/parse", controller.getStringversionTwo)

module.exports = router;
