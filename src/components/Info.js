import React, { Component } from 'react';
import '../css/styles.css';
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

class Info extends Component {

    render() {
        return (
            <section id="inicio">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img src={img2} className="img-fluid rounded-circle" alt="" /> 
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h1 className="display-4">¿Por qué Healthy Food?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                                sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                                voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <img src={img3} className="img-fluid rounded-circle" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h1 className="display-4">Una alimentacón saludable podría cambiar tu vida</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                                   sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                                   voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
            
export default Info;