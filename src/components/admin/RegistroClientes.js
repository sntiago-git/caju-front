import React, { Component } from 'react';
import '../../css/admin.css';
import axios from 'axios';

class RegistroClientes extends Component {

    onSubmit = async e => {

        e.preventDefault();

        try {
            const res = await axios.post('https://caju-back.herokuapp.com/api/clientes/', {
                nombre: this.refs.nombre.value,
                cedula: this.refs.cedula.value,
                telefono: this.refs.telefono.value,
                direccion: this.refs.direccion.value,
            })

            console.log(res);
            alert("Nuevo cliente ha sido creado");
            document.location.reload();

        } catch (error) {
            alert(error.response.data.error);
        }
    }

    render() {
        return (

            <div className="contenedor-form">

                <div className="contenedor-etiquetas">
                    <div className="item-etiquetas">Nombre</div>
                    <div className="item-etiquetas">Cedula</div>
                    <div className="item-etiquetas">Telefono</div>
                    <div className="item-etiquetas">Dirección</div>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="sidebar-item "> Registro Clientes</div>
                    <input className="item-form " type="text" placeholder="Nombre" ref="nombre" />
                    <input className="item-form " type="number" placeholder="Cedula" ref="cedula" />
                    <input className="item-form " type="number" placeholder="Telefono" ref="telefono" />
                    <input className="item-form " type="text" placeholder="Direccion" ref="direccion" />
                    <button ref="guardarcliente" type="submit" className="item-form " >Guardar</button>
                </form>
            </div>

        );
    }
}

export default RegistroClientes;