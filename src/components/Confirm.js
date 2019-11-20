import React from 'react'
import axios from 'axios'

class Confirm extends React.Component {

  continue = e => {
    e.preventDefault()
    //process form
    const user = {
      denominationSocial: this.props.values.denominationSocial,
      formeJuridique: this.props.values.formeJuridique,
      noRc: this.props.values.noRc,
      dateEnregistrement: this.props.values.dateEnregistrement,
      paysEnregistrement: this.props.values.paysEnregistrement,
      nationalite: this.props.values.nationalite,
      nom: this.props.values.nom,
      prenoms: this.props.values.prenoms,
      date2Naissance: this.props.values.date2Naissance,
      lieu2naissance: this.props.values.lieu2naissance,
      adresse: this.props.values.adresse,
      fonction: this.props.values.fonction
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add',user)
      .then(res => console.log(res.data))

    window.location = '/'
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render () {
    const {values: {denominationSocial, formeJuridique, noRc, dateEnregistrement, paysEnregistrement,
      nationalite, nom, prenoms, date2Naissance, lieu2naissance, adresse, fonction}} = this.props

    return (
      <div className="container">
        <h1 className="title is-centered">Confirm User Data</h1>
        <div className="list">
          <p className="list-item">
            Dénomination Social : <span className="tag is-info is-normal">{denominationSocial}</span>
          </p>
          <p className="list-item">
            Forme Juridique : <span className="tag is-info is-normal">{formeJuridique}</span>
          </p>
          <p className="list-item">
            N°RC ou Équivalent : <span className="tag is-info is-normal">{noRc}</span>
          </p>
          <p className="list-item">
            Date d'enregistrement : <span className="tag is-info is-normal">{dateEnregistrement}</span>
          </p>
          <p className="list-item">
            Pays d'enregistrement : <span className="tag is-info is-normal">{paysEnregistrement}</span>
          </p>
          <p className="list-item">
            Nationalité : <span className="tag is-info is-normal">{nationalite}</span>
          </p>
          <p className="list-item">
            Nom : <span className="tag is-info is-normal">{nom}</span>
          </p>
          <p className="list-item">
            Prénoms : <span className="tag is-info is-normal">{prenoms}</span>
          </p>
          <p className="list-item">
            Date de naissance : <span className="tag is-info is-normal">{date2Naissance}</span>
          </p>
          <p className="list-item">
            Lieu de naissance : <span className="tag is-info is-normal">{lieu2naissance}</span>
          </p>
          <p className="list-item">
            Adresse : <span className="tag is-info is-normal">{adresse}</span>
          </p>
          <p className="list-item">
            Fonction : <span className="tag is-info is-normal">{fonction}</span>
          </p>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link" onClick={this.continue} >Confirmer & Continuer</button>
          </div>
          <div className="control">
            <button className="button is-light" onClick={this.back}>Retour</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Confirm;
