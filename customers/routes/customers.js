var express = require('express');
var router = express.Router();
const customerCtrl = require("../controllers/customers");

/* GET customers listing. */
router.get('/', customerCtrl.index);

router.get("/new", customerCtrl.new);

router.get("/edit/:id", customerCtrl.edit);

router.get("/:id", customerCtrl.show);

// router.delete("/:id", customerCtrl.delete);

router.put("/update/:id", customerCtrl.update);

router.post("/", customerCtrl.create);

module.exports = router;