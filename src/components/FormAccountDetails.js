import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'

class FormAccountDetails extends React.Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render () {
    const {values, handleChange, selectCountry, selectNationality} = this.props

    return (
      <div className="container">
        <h1 className="title is-centered">Account Details</h1>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Dénomination Social :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('denominationSocial')} defaultValue={values.denominationSocial} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Forme Juridique :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('formeJuridique')} defaultValue={values.formeJuridique} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">N°RC ou Équivalent :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('noRc')} defaultValue={values.noRc} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Date d'enregistrement :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="date" onChange={handleChange('dateEnregistrement')} defaultValue={values.dateEnregistrement} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Pays d'enregistrement :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <CountryDropdown className="input" onChange={(val) => selectCountry(val)} value={values.paysEnregistrement} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Nationalité :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <CountryDropdown className="input" onChange={(val) => selectNationality(val)} value={values.nationalite} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link" onClick={this.continue} disabled={(!values.denominationSocial || !values.formeJuridique) ? true:false}>Continuer</button>
          </div>
        </div>

      </div>
    )
  }
}

export default FormAccountDetails;
