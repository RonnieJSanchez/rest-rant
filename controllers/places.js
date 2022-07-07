
const router = require("express").Router();
const places = require("../models/places.js")


//index route
router.get("/", (req, res) => {
  res.render("places/index", { places });
});
//new route
router.get("/new", (req, res) => {
  res.render('places/new')
});
//show route
router.get("/:id", (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
   else if(!places[id]){
    res.render('error404')
  }
  else {
      res.render("places/show",{ place: places[id], id});
  }
});
//delete route
router.delete("/places/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

//Edit Route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})




router.post('/', (req, res) => {
  console.log(req.body)
  
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = "/images/swedishChef.jpg"
  }
  if (!req.body.city) {
    req.body.city = "Timbuctoo"
  }
  if (!req.body.state) {
    req.body.state = "California"
  }
  places.push(req.body)
  res.redirect('/places')
});


module.exports = router 