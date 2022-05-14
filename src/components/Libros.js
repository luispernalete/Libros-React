import React, { Component } from 'react'
import Swal from 'sweetalert2'


export default class Libros extends Component {

  state = {
    titulo: '',
    autor: '',
    editorial: '',
    publicacionanio: 1900,
    genero: '',
    modoeditar: false,
    editarindex: undefined,

  };

  submit = (e) => {
    e.preventDefault();
    
    if (this.state.modoeditar){

      this.props.actualizarlibro(this.state.editarindex,this.state);
      this.setState({
        titulo: "",
        autor: "",
        editorial: "",
        publicacionanio:1900,
        genero: "",
        modoeditar: false,
        editarindex: undefined
    });

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Libro actualizado exitosamente',
      showConfirmButton: false,
      timer: 2000
    })


    }else{
      this.props.agregarlibro(this.state);
      this.setState({
          titulo: "",
          autor: "",
          editorial: "",
          publicacionanio:1900,
          genero: "",
          modoeditar: false,
          editarindex: undefined
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Libro creado exitosamente',
        showConfirmButton: false,
        timer: 2000
      })

    }


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
          genero: "",
          modoeditar: false,
          editarindex: undefined
      });    
  }


  editar = (e) => {
    const datoseditar = this.props.editarlibro(e);
    //console.log("Datos edit: ",datoseditar);

    this.setState({
      titulo: datoseditar.titulo,
      autor: datoseditar.autor,
      editorial: datoseditar.editorial,
      publicacionanio:datoseditar.publicacionanio,
      genero: datoseditar.genero,
      modoeditar: true,
      editarindex: e
    })

  }

  eliminar = (e) => {

    Swal.fire({
      title: 'Desea Eliminar el Libro?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No!',
    }).then((result) => {
      if (result.isConfirmed) {

        this.props.eliminarlibro(e);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Libro eliminado exitosamente',
          showConfirmButton: false,
          timer: 2000
        })


      }
    })
   
      
    
     

  }


  render() {
    

    const todoslibros = this.props.librostodos.map((todo, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <h5 className="card-title text-center">
                {todo.titulo}
              </h5>
             
              <div className="card-body">
               <div> <strong>Autor:</strong> {todo.autor}</div> 
               <div><strong>Editorial:</strong> {todo.editorial} </div> 
               <div><strong>Año de publicacion:</strong> {todo.publicacionanio} </div> 
               <div><strong>Genero: </strong>{todo.genero} </div> 
              </div>

              <div className="card-footer">

              <button
                  onClick={this.editar.bind(this, i)}
                  className="btn btn-primary btn-sm">
                  Editar
                </button>

                <button onClick={this.eliminar.bind(this, i)}
                  className="btn btn-danger ms-2 btn-sm">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      });

    return (

      <div className="container">
      <div className="row mt-4">
      <div className="col-md-4 text-center">


      <div className="card">
      <h3>
      {
        this.state.modoeditar ? "Actualizar Libro" : "Registrar Libro"
      }

        </h3>
  <form className="card-body" onSubmit={this.submit}>
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


      
      
      
      
      {this.state.modoeditar ? 
      <button type="submit" className="btn btn-outline-primary" >Actualizar</button>
       : 
       <button type="submit" className="btn btn-outline-success" >Guardar</button>
       }
      
      

    <button className="btn btn-outline-secondary ms-2" onClick={this.resetform} >
      Reset
    </button>
  </form>
</div>



      </div>
      <div className="col-md-8">
      <div className="row">{todoslibros}</div>
      </div>
      </div>
    </div>


        
        



    )
  }
}
