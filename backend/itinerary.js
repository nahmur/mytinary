let mongoose = require('mongoose')

let itinerarySchema = new mongoose.Schema({
  name: String,
  title: String,
  perfil: String,
  rating: Number,
  duration: Number,
  price: Number,
  hashtag: Array,
  photo:Array

})

let itinerary = mongoose.model('itinerary', itinerarySchema, 'itineraries')

// //-------#####Agrego itinerarios
// let arrayitinerary=[]; 
// // para insertar itinerarios


////Para  agregar itinerarios
// let itin1 = new itinerary({
//     name: "Barcelona",
//     title: "Gaudi in a Day",
//     perfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnimhIdewPx4BJ9ao643WzHKTRKO8WYM56vG6s5C7iO_V4Q0_4bQ&s",
//     rating: 50,
//     duration: 10,
//     price: 100,
//         hashtag: ["#Gaudi", "#Fanny","#Barcelona"],
//     photo:"https://advantour.es/wp-content/uploads/2018/12/Casa-Batll%C3%B3-1-1200x500.jpg"
//   })

//   itin1.save(function(err, itin1){
//   console.log("salve un dato", itin1.price)
//   }) 
   

module.exports = itinerary;

