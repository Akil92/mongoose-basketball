const express = require('express');
const router = express.Router();

const courtCtrl = require("../controllers/courts");

router.get("/", courtCtrl.index);

router.get("/courts", courtCtrl.newCourt);

router.post("/courts", courtCtrl.addTeam);

router.post("/", courtCtrl.create);

router.get("/:id", courtCtrl.show);




module.exports = router;