const router = require("express").Router();
const places = require("../models/places.js")

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render('places/new')
});


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

//router.get('/', (req,res) => {
//  let places = [
//{
//  name: 'H-Thai-ML',
//  city: 'Seattle',
//  state: 'WA',
//  cuisines: 'Thai, Pan-Asian',
//  pic: '/images/thai-food.jpg'
//}, 
//{
//  name: 'Coding Cat Cafe',
//  city: 'Phoenix',
//  state: 'AZ',
//  cuisines: 'Coffee, Bakery',
//  pic: '/images/coffee.jpg'
//},
//];
//
//  res.render('places/index', {places});
//
//});

module.exports = router 