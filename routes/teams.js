const express = require('express');
const router = express.Router();

const teamsCtrl = require("../controllers/teams");

router.get("/new", teamsCtrl.newTeam);

router.get("/", teamsCtrl.index);

router.get("/:id", teamsCtrl.show);

router.post("/", teamsCtrl.create);

module.exports = router;
