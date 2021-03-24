import React, { Component } from 'react';
import '../../css/admin.css';
import axios from 'axios';

class TablaHistVentas extends Component {

  state = {
    ventas: []
  }

  async componentDidMount() {

    const res = await axios.get('https://caju-back.herokuapp.com/api/ventas/');
    this.setState({ ventas: res.data });
    console.log(this.state.ventas);
  }
  render() {
    return (


      <div className="contenedor-tabla">
        <h1>Historial Ventas</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Modo de pago</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.ventas.map(item => <tr key={item._id}><th>{item.fechaCompra}</th><td>{item.cliente}</td><td>{item.producto}</td><td>{item.cantidad} Libras</td><td>{item.medioPago}</td></tr>)
            }

          </tbody>
        </table>
      </div>

    );
  }
}

export default TablaHistVentas;