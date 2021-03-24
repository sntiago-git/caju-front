import React, { Component } from 'react';
import '../css/styles.css';
import productch from '../img/productch.jpg'
import productfd from '../img/productfd.jpg'
import productfr from '../img/productfr.jpg'
import productfs from '../img/productfs.jpg'
import productgr from '../img/productgr.jpg'
import productse from '../img/productse.jpg'

class Productos extends Component {

    render() {

        return (
            <section id="productos">
        <div className="centext-subtitulo abracadabra">
            <span className="subtitles">PRODUCTOS</span>
        </div>

        <div className="row text-center cajas-productos">

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productfs} alt="" /> 
                    <div className="card-body">
                        <h4 className="card-title">Frutos secos</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                            necessitatibus neque.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productfd} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Frutos deshidratados</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni
                            sapiente, tempore debitis beatae culpa natus architecto.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productch} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Queso</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                            necessitatibus neque.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="row text-center cajas-productos">

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productfr} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Frutas</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                            necessitatibus neque.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productse} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Semillas</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni
                            sapiente, tempore debitis beatae culpa natus architecto.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={productgr} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Granola</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                            necessitatibus neque.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default Productos;