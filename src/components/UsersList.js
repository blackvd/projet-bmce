import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = props => (
  <tr>
    <td>{props.user.denominationSocial}</td>
    <td>{props.user.formeJuridique}</td>
    <td>{props.user.noRc}</td>
    <td>{props.user.dateEnregistrement}</td>
    <td>{props.user.paysEnregistrement}</td>
    <td>{props.user.nationalite}</td>
    <td>{props.user.nom}</td>
    <td>{props.user.prenoms}</td>
    <td>{props.user.date2Naissance}</td>
    <td>{props.user.lieu2naissance}</td>
    <td>{props.user.adresse}</td>
    <td>{props.user.fonction}</td>
    <td>
      <Link to={"/edit/"+props.user._id} className="button is-primary"><FontAwesomeIcon icon="edit"/></Link>
      <a href="#" className="button is-danger" onClick={() => {props.deleteUser(props.user._id)}}><FontAwesomeIcon icon="trash" /></a>
    </td>
  </tr>
)

export default class UsersList extends Component {

  state= {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(res => console.log(res.data))
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  usersList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />
    })
  }

  render() {
    return (
      <div className="Container">
        <h1 className="title is-centered">Users List</h1>
        <div className="table-container">
          <table className="table is-hoverable is-fullwidth" id="table-to-xls">
            <thead>
              <tr>
                <th><abbr title="Dénomination Social">DS</abbr></th>
                <th><abbr title="Forme Juridique">FJ</abbr></th>
                <th><abbr title="N°RC">N°RC</abbr></th>
                <th><abbr title="Date d'enregistrement">Date d'enr</abbr></th>
                <th><abbr title="Pays d'enregistrement">Pays d'enr</abbr></th>
                <th><abbr title="Nationalité">Nationalité</abbr></th>
                <th><abbr title="Nom">Nom</abbr></th>
                <th><abbr title="Prénoms">Prénoms</abbr></th>
                <th><abbr title="Date de naissance">Date de naiss</abbr></th>
                <th><abbr title="Lieu de naissance">Lieu de naiss</abbr></th>
                <th><abbr title="Adresse">adr</abbr></th>
                <th><abbr title="Fonction">Fonction</abbr></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.usersList()}
            </tbody>
          </table>
          <ReactHtmlTableToExcel
            className="button is-info"
            table="table-to-xls"
            filename="userxls"
            sheet="userxls"
            buttonText="Export to excel"
          />
        </div>
      </div>
    )
  }
}
