import React, { Component } from 'react';
import '../../css/admin.css';
import axios from 'axios';

class RegistroInventario extends Component {

    onSubmit = async e => {

        e.preventDefault();

        try {
           
            const res = await axios.post('https://caju-back.herokuapp.com/api/inventario/', {
              codigoProducto: this.refs.codigo.value,
              nombreProducto: this.refs.producto.value,
              cantidadLibrasStock: this.refs.cantidadAlInventario.value,
              precioCompra: this.refs.precioCompra.value,
              precioVenta: this.refs.precioVenta.value,
            })
            console.log(res);
            alert("Nuevo producto ha sido creado");
            document.location.reload();
            
        } catch (error) {
            alert(error.response.data.error);
        }
    }

    render() {
        return (

          <div className="contenedor-form">

          <div className="contenedor-etiquetas">
              <div className="item-etiquetas">Código</div>
              <div className="item-etiquetas">Producto</div>
              <div className="item-etiquetas">Cantidad</div>
              <div className="item-etiquetas">P. Compra</div>
              <div className="item-etiquetas">P. Venta</div>
          </div>
          <form onSubmit={this.onSubmit}>

              <div className="sidebar-item ">Añadir al Inventario</div>

              <input className="item-form " type="text" placeholder="Código Producto" ref="codigo" />
              <input className="item-form " type="text" placeholder="Nombre Producto" ref="producto" />
              <input className="item-form " type="number" placeholder="Cantidad Libras" ref="cantidadAlInventario" />
              <input className="item-form " type="number" placeholder="Precio Compra" ref="precioCompra" />
              <input className="item-form " type="number" placeholder="Precio Venta" ref="precioVenta" />
              
              <button type="submit" className="item-form " >Guardar</button>

          </form>
      </div>

        );
    }
}

export default RegistroInventario;