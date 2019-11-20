const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' +err))
})

router.route('/add').post((req, res) => {
  const denominationSocial = req.body.denominationSocial
  const formeJuridique = req.body.formeJuridique
  const noRc = req.body.noRc
  const dateEnregistrement = req.body.dateEnregistrement
  const paysEnregistrement = req.body.paysEnregistrement
  const nationalite = req.body.nationalite
  const nom = req.body.nom
  const prenoms = req.body.prenoms
  const date2Naissance = req.body.date2Naissance
  const lieu2naissance = req.body.lieu2naissance
  const adresse = req.body.adresse
  const fonction = req.body.fonction

  const newUser = new User({
    denominationSocial,
    formeJuridique,
    noRc,
    dateEnregistrement,
    paysEnregistrement,
    nationalite,
    nom,
    prenoms,
    date2Naissance,
    lieu2naissance,
    adresse,
    fonction
  })

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error : ' +err))
})

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.denominationSocial = req.body.denominationSocial
      user.formeJuridique = req.body.formeJuridique
      user.noRc = req.body.noRc
      user.dateEnregistrement = req.body.dateEnregistrement
      user.paysEnregistrement = req.body.paysEnregistrement
      user.nationalite = req.body.nationalite
      user.nom = req.body.nom
      user.prenoms = req.body.prenoms
      user.date2Naissance = req.body.date2Naissance
      user.lieu2naissance = req.body.lieu2naissance
      user.adresse = req.body.adresse
      user.fonction = req.body.fonction

      user.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error : '+err))
    })
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch(err => res.status(400).json('Error : '+err))
})

module.exports = router
