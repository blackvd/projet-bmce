const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  denominationSocial: {type: String},
  formeJuridique: {type: String},
  noRc: {type: String},
  dateEnregistrement: {type: String},
  paysEnregistrement: {type: String},
  nationalite: {type: String},
  nom: {type: String},
  prenoms: {type: String},
  date2Naissance: {type: String},
  lieu2naissance: {type: String},
  adresse: {type: String},
  fonction: {type: String},
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
