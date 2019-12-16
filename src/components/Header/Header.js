import React, { Component } from 'react';
import './Header.css';
import Menu from './Menu/Menu';
import Headroom from 'react-headroom';
class Header extends Component {
    render() {
        return (
            <Headroom>
            <div className="wrap header">
                <div className="col xl-1-12"></div>
                <div className="col xl-5-12 headerText unselectable">Yusuf Baş</div>
                <div className="col xl-6-12">
                    <Menu/>
                </div>
                <div className="col xl-1-12"></div>
            </div>
            </Headroom>
           
        );
    }
}

export default Header;