import React, {Component} from 'react'
import FormAccountDetails from './FormAccountDetails'
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'

export default class CreateUser extends Component {

  state = {
    step: 1,
    denominationSocial: '',
    formeJuridique: '',
    noRc: '',
    dateEnregistrement: '',
    paysEnregistrement: '',
    nationalite: '',
    nom: '',
    prenoms: '',
    date2Naissance: '',
    lieu2naissance: '',
    adresse: '',
    fonction: ''
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  selectCountry = (val) => {
    this.setState({paysEnregistrement: val})
  }

  selectNationality = (val) => {
    this.setState({nationalite: val})
  }

  render() {
    const {step} = this.state
    const {denominationSocial, formeJuridique, noRc, dateEnregistrement, paysEnregistrement,
      nationalite, nom, prenoms, date2Naissance, lieu2naissance, adresse, fonction}  = this.state
    const values = {denominationSocial, formeJuridique, noRc, dateEnregistrement, paysEnregistrement,
      nationalite, nom, prenoms, date2Naissance, lieu2naissance, adresse, fonction}

    switch (step) {
      case 1:
        return (
          <FormAccountDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            selectCountry={this.selectCountry}
            selectNationality={this.selectNationality}
            values={values}
          />
        )
      case 2:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      default:
        return(<h1>An error occur</h1>)
    }
  }
}
