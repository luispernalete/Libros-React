import React, { Component } from 'react'
import logo from '../librologo.png';
import { Link } from 'react-router-dom';


export default class Navegacion extends Component {

  /* state= {
    numerodelibros: this.props.numerodelibros
  } */
 


  render() {


    return (
     
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
    
    <Link className="navbar-brand" to="/">
       <img src={logo} alt="" width="35" height="40" className="d-inline-block me-2" />
            Libros App
       </Link>
      
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/libros">Libros
        <span className="badge bg-danger ms-2">
              {this.props.numerodelibros}
            </span>
            </Link>
      </li>
    
    </ul>
  </div>
</div>
</nav>



    )
  }
}
