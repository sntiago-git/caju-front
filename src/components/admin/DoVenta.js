import React, { Component } from 'react';
import '../../css/admin.css';
import axios from 'axios';

class DoVenta extends Component {

    state = {
        productos: [],
        clientes: []
    }

    async componentDidMount() {

        const resProductos = await axios.get('https://caju-back.herokuapp.com/api/inventario/');
        const resClientes = await axios.get('https://caju-back.herokuapp.com/api/clientes/');
        this.setState({ productos: resProductos.data, clientes: resClientes.data });
    }

    onSubmit = async e => {

        e.preventDefault();

        try {
            const res = await axios.post('https://caju-back.herokuapp.com/api/ventas/', {
                cliente: this.refs.clienteVenta.value,
                producto: this.refs.productoVenta.value,
                cantidad: this.refs.cantidadVenta.value,
                medioPago: this.refs.medioPagoVenta.value,
                fechaCompra: this.refs.fechaVenta.value,
            })
            console.log(res);
            alert("Nueva venta ha sido creada");
            document.location.reload();
            
        } catch (error) {
            alert(error.response.data.error);
        }
    }

    render() {
        return (

            <div className="contenedor-form">

                <div className="contenedor-etiquetas">
                    <div className="item-etiquetas">Fecha</div>
                    <div className="item-etiquetas">Producto</div>
                    <div className="item-etiquetas">C. Libras</div>
                    <div className="item-etiquetas">Cliente</div>
                    <div className="item-etiquetas">M. Pago</div>
                </div>

                <form onSubmit={this.onSubmit}>

                    <div className="sidebar-item ">Realizar Venta</div>

                    <input name="fecha" className="item-form " type="date" placeholder="Fecha" ref="fechaVenta" />

                    <select className="item-form " ref="productoVenta">
                        {
                            this.state.productos.map(item => <option value={item.nombreProducto} key={item._id}>{item.nombreProducto}</option>)
                        }
                    </select>

                    <input className="item-form " type="number" placeholder="Cantidad" ref="cantidadVenta" />
                    
                    <select className="item-form " ref="clienteVenta">
                        {
                            this.state.clientes.map(item => <option value={item.nombre} key={item._id}>{item.nombre}</option>)
                        }
                    </select>
                    <select className="item-form " ref="medioPagoVenta">
                        <option value="Efectivo">Efectivo</option>
                        <option value="Credito">Credito</option>
                    </select>

                    <button  type="submit" className="item-form " >Guardar</button>

                </form>
            </div>
        );
    }
}

export default DoVenta;