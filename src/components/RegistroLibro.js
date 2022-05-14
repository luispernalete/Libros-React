import React, { Component } from 'react'

export default class RegistroLibro extends Component {

  state = {
    titulo: '',
    autor: '',
    editorial: '',
    publicacionanio: 1900,
    genero: ''
  };

  

    guardarlibro = (e) => {
      e.preventDefault();
      //console.log("guardar libro",this.state);
      this.props.agregarlibro(this.state);
      
      this.setState({
          titulo: "",
          autor: "",
          editorial: "",
          publicacionanio:1900,
          genero: ""
      });
  }

  InputChange = (e) => {
  
        const {value, name} = e.target;
        //console.log(value, name);
        this.setState({
          [name]: value
        });
      }

      resetform = (e) => {
    
        e.preventDefault();
        this.setState({
            titulo: "",
            autor: "",
            editorial: "",
            publicacionanio:1900,
            genero: ""
        });

        
    }

  render() {
    return (


      <div className="card">
      <h3>Registrar Libro</h3>
  <form className="card-body" onSubmit={this.guardarlibro}>
    <div className="form-group mb-3" >
      <input
        type="text"
        name="titulo"
        className="form-control"
        value={this.state.titulo}
        onChange={this.InputChange}
        placeholder="Titulo"
        />
    </div>
    <div className="form-group mb-3">
    <input
        type="text"
        name="autor"
        className="form-control"
        value={this.state.autor}
        onChange={this.InputChange}
        placeholder="Autor"
        />

    </div>
    <div className="form-group mb-3">
      <input
        type="text"
        name="editorial"
        className="form-control"
        value={this.state.editorial}
        onChange={this.InputChange}
        placeholder="Editorial"
        />
    </div>
    <div className="form-group mb-3">
    <input
        type="number"
        name="publicacionanio"
        className="form-control"
        value={this.state.publicacionanio}
        onChange={this.InputChange}
        placeholder="Año de publicacion"
        />
    </div>
    <div className="form-group mb-3">
    <input
        type="text"
        name="genero"
        className="form-control mb-3"
        value={this.state.genero}
        onChange={this.InputChange}
        placeholder="Genero"
        />
    </div>
    <button type="submit" className=" btn btn-outline-success" >
      Guardar
    </button>
    <button className="btn btn-outline-secondary ms-2" onClick={this.resetform} >
      Reset
    </button>
  </form>
</div>



    )
  }
}
