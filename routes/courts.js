const express = require('express');
const router = express.Router();

const courtCtrl = require("../controllers/courts");

router.get("/", courtCtrl.index);
router.post("/addTeam", courtCtrl.addTeam);
router.post("/addTeam", courtCtrl.create);


module.exports = router;