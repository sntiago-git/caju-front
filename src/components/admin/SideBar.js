import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../css/admin.css';

class SideBar extends Component {

    constructor(props){

        super(props);
        this.state = {
            nav: props.nav,
            redirect: undefined
        }
        this.onClick = this.onClick.bind(this);
    }

    async onClick(url){

        const pathname = window.location.pathname;
        if(url !== pathname){

            this.setState({redirect: url});
        }
    }

    render() {

        if(this.state.redirect){

            return (<Redirect to = {this.state.redirect} />);
        }
        
        return (

            <nav className="sidebar">

                <div className="sidebar-item ">
                    <a className="" onClick = {() => this.onClick('/Admin')}>Inventario</a>
                </div>
                <div className="sidebar-item">
                    <a className="" onClick = {() => this.onClick('/AdminAddInventario')}>Añadir al Inventario</a>
                </div>
                <div className="sidebar-item">
                    <a className="" onClick = {() => this.onClick('/AdminDoVenta')}>Realizar venta</a>
                </div>
                <div className="sidebar-item">
                    <a className="" onClick = {() => this.onClick('/AdminHistVentas')}>Historial Ventas</a>
                </div>
                <div className="sidebar-item">
                    <a className="" onClick = {() => this.onClick('/AdminRegistro')}>Registro Clientes</a>
                </div>
                
            </nav>

        );
    }
}

export default SideBar;