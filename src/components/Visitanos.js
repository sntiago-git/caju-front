import React, {Component} from 'react';
import '../css/styles.css';

class Visitanos extends Component{

    render(){

        return (
            <section className="text-center" id="visitanos">

            <div className="centext-subtitulo abracadabra">
                <span className="subtitles">VISÍTANOS</span>
            </div>

            <div className="container py-5 rounded sedes">
                <div className="row row-visitanos">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-store-alt"></i>
                                <h3>Neiva</h3>
                                <p>Cra. 10 13-8</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-store-alt"></i>
                                <h3>Bogotá</h3>
                                <p>Cra. 10 13-8</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-store-alt"></i>
                                <h3>Medellín</h3>
                                <p>Cra. 10 13-8</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-store-alt"></i>
                                <h3>Ibagué</h3>
                                <p>Cra. 10 13-8</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Visitanos;