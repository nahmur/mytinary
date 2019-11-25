let mongoose = require('mongoose')

let citiesSchema = new mongoose.Schema({
  name: String,
  country: String,
  imagen: String
})

module.exports = mongoose.model('cities', citiesSchema)
