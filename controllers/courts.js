const Court = require("../models/court");
const Team = require("../models/team");

async function index(req, res) {
  let teams = await Team.find({});
  let courts = await Court.find({}).populate("teams");
  console.log(courts);
  res.render("courts/index", {title: "All courts", courts, teams});
}

async function addTeam(req, res) {
  console.log("addTeam");
  try{
    let team = await Team.findById(req.body.teamsId);
    let court = await Court.findOne({"courtNo": req.body.courtNo});
    console.log(req.body);
    console.log(team);
    console.log(court);
    console.log("anything");
    if (court !== null) {
      court.teams.push(team);
      await court.save();
      res.render("/courts");  
    } else {
      console.log("Court not found");
    }
    } catch (err) {
      console.log(err);
  } 
}  



async function show(req, res) {
  try {
  const court = await Court.findById(req.params.id).populate("teams");
  console.log(court);
  res.render("courts/index", { title: "Pick Your Court", court });
  } catch (err) {
  console.log(err);
  }
}

async function create(req, res) {
  console.log("create");
  console.log(req.body);
  try {
     let newCourt = await Court.create(req.body);
     newCourt.teams.push(req.body.teamsId);
     await newCourt.save();
     res.redirect("/courts");
  }  catch (err) {
  console.log(err);
  }
  console.log(newCourt);
}

async function newCourt(req, res) {
   res.render("/courts", {errorMsg: ""}) 
}
  



module.exports = {
    addTeam,
    index,
    show,
    create,
    newCourt,
}