import React, { Component } from 'react';
import '../../css/admin.css';
import axios from 'axios';

class Tabla extends Component {

  state = {
    inventario: []
  }

  async componentDidMount(){

    const res = await axios.get('https://caju-back.herokuapp.com/api/inventario/');
    this.setState({inventario: res.data});
    console.log(this.state.inventario);
  }
  
  
  render() {
    return (


      <div className="contenedor-tabla">
        <h1>Inventario</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código Producto</th>
              <th>Producto</th>
              <th>Cantidad en Stock</th>
              <th>Precio compra</th>
              <th>Precio venta</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.inventario.map( item => <tr> <th>{item.codigoProducto}</th> <td>{item.nombreProducto}</td> <td>{item.cantidadLibrasStock} Libras</td> <td>{item.precioCompra}</td> <td>{item.precioVenta}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    );
  }
}

export default Tabla;