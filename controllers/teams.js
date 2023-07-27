const Team = require("../models/team");


async function newTeam(req, res) {
  res.render("teams/new", { title: "Add New Team"});
}

async function create(req, res) {
    console.log(req.body);
    let newTeam = await Team.create(req.body);
    console.log(newTeam);
    res.redirect("/teams");
  }

async function index(req, res) {
    const teams = await Team.find({});
    res.render("teams/", {title: "All Teams", teams});
}

async function show(req, res) {
    const team = await Team.findById(req.params.id)
    res.render("teams/show", {title: "Team Info", team});
}

async function deleteTeam(req, res) {
  await Team/Team.findOneAndDelete(
    {id: req.params.id, userRecommending: req.user._id}
  );
  res.redirect("/teams");
}


module.exports = {
    create,
    newTeam,
    index,
    show,
    deleteTeam
}