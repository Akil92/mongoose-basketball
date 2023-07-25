const express = require('express');
const router = express.Router();

const courtCtrl = require("../controllers/courts");

router.get("/", courtCtrl.index);



module.exports = router;