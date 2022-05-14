import React, { Component } from 'react'
import imagen from './ECDIMA20151007_0004_1.jpg'

export default class Home extends Component {
  render() {
    return (
     
        <div className="container">
        
        <p className='hometitle'> Sistema de Libros - React </p>
        <img src={imagen} class="img-fluid border border-secondary border-3" alt="..."></img>
       </div>

    )
  }
}
