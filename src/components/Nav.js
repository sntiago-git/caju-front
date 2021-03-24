import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/styles.css';

class Nav extends Component {

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
            <nav className="navbar-fixtop" id="navbar">
                <a className="navbar-item left abracadabra" onClick = {() => this.onClick('/')}>Healthy Food</a>
                <a className="navbar-item abracadabra right" onClick = {() => this.onClick('/Admin')}>Admin</a>
            </nav>
        );
    }
}

export default Nav;