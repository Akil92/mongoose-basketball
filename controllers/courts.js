const Court = require("../models/court");
const Team = require("../models/team");

async function index(req, res) {
    let team = await Team.find({});
    console.log(Team);
res.render("courts/index", {title: "All courts", team});
}

async function addTeam(req, res) {
    let team = await Team.findById(req.body.teamsId);
    let court = await Court.find({"courtNo": req.body.courtNo});
    console.log(req.params);
    console.log(req.body)
    console.log(team);
    console.log(court);
    court.teams.push(teams);
    try {
        await court.save()
        res.redirect("/courts");
    } catch (err) {
        console.log(err);
    }
}


async function show(res, render) {
  const court = await Court.findById(req.params.id).populate("team");
  const team = await Team.find({ _id: {nin:team.teamName} }).sort("teamName");
  console.log(court);
  res.render("courts/index", { title: "Pick Your Court", court });
}

async function create(res, render) {
  let aCourt = await Court.create(req.body);
  res.redirect("/courts/addTeam");
}
  



module.exports = {
    addTeam,
    index,
    show,
    create
}