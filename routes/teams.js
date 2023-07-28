const express = require('express');
const router = express.Router();
const ensureLoggedIn = require("../config/ensuredLoggedIn");

const teamsCtrl = require("../controllers/teams");

router.get("/new", ensureLoggedIn, teamsCtrl.newTeam);

router.get("/", teamsCtrl.index);

router.get("/:id", teamsCtrl.show);

router.post("/", ensureLoggedIn, teamsCtrl.create);

router.delete("/:id", teamsCtrl.deleteTeam);

router.get("/:id/edit",ensureLoggedIn, teamsCtrl.edit);

router.put("/:id", ensureLoggedIn, teamsCtrl.update);

module.exports = router;
