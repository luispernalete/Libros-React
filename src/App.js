import './App.css';
import React, { Component } from 'react';
import { Route,BrowserRouter, Routes} from 'react-router-dom';


//componentes
import Navegacion from './components/Navegacion'
import Libros from './components/Libros'
//import RegistroLibro from './components/RegistroLibro'
import Home from './components/Home'

//datos estaticos de libros
import LibrosTodos from './Data/todoslibros.json'

export default class App extends Component {

  state = {
    librosdata: LibrosTodos.todos
  }


  agregarlibro = (libro) => {
  
    console.log("Creando libro",libro);

     this.setState({
      librosdata: [...this.state.librosdata, libro]
    }) 

  

  }

  eliminarlibro = (index) => {

    this.setState({
      librosdata: this.state.librosdata.filter((e, i) => {
        return i !== index
      })
    });
    
  
  }

  buscarlibro = (index) => {

    return this.state.librosdata.filter((e, i) => {
      return i === index
    })[0]
  }

  actualizar = (index,libronew) =>{

    this.setState({
      librosdata: this.state.librosdata.map((libro,i) => {
        if (index === i){
          libro.titulo = libronew.titulo;
          libro.autor = libronew.autor;
          libro.editorial = libronew.editorial;
          libro.publicacionanio = libronew.publicacionanio;
          libro.genero = libronew.genero
        }
        return libro
    })
    })
  }


  render() {
    

  return (    


  <div className='App'>
     <BrowserRouter>
      <Routes>

      <Route path="/" element={ 
        <>

       <Navegacion numerodelibros={this.state.librosdata.length}/>
       <Home></Home>

       </>

      }/>


       <Route path="/libros" element={ 
      <>
       <Navegacion 
       numerodelibros={this.state.librosdata.length}
       />
       <Libros 
       actualizarlibro = {this.actualizar}
       agregarlibro={this.agregarlibro} 
       editarlibro = {this.buscarlibro} 
       eliminarlibro={this.eliminarlibro}
       librostodos={this.state.librosdata}
       />
      </>
       }/>
    
     
      </Routes>
      </BrowserRouter>
    </div>



    )
  }
}