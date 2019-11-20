import React from 'react'

class FormUserDetails extends React.Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render () {
    const {values, handleChange} = this.props

    return (
      <div className="container">
        <h1 className="title is-centered">User Details</h1>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Nom :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('nom')} defaultValue={values.nom} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Prénoms :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('prenoms')} defaultValue={values.prenoms} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Date de naissance :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="date" onChange={handleChange('date2Naissance')} defaultValue={values.date2Naissance} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Lieu de naissance :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('lieu2naissance')} defaultValue={values.lieu2naissance} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Adresse :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('adresse')} defaultValue={values.adresse} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Fonction :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" onChange={handleChange('fonction')} defaultValue={values.fonction} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link" onClick={this.continue} disabled={!values.nom || !values.prenoms ? true:false}>Continuer</button>
          </div>
          <div className="control">
            <button className="button is-light" onClick={this.back}>Retour</button>
          </div>
        </div>

      </div>
    )
  }
}

export default FormUserDetails;
