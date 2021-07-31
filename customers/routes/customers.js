var express = require('express');
var router = express.Router();
const customerCtrl = require("../controllers/customers");

/* GET customers listing. */
router.get('/', customerCtrl.index);

router.get("/new", customerCtrl.new);

router.get("/:id", customerCtrl.show);

router.get("/edit/:id", customerCtrl.edit);

// router.delete("/:id", customerCtrl.delete);

router.post("/", customerCtrl.create);

router.put("/update/:id", customerCtrl.update);

module.exports = router;
