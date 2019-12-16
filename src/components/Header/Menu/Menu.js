import React, { Component } from 'react';
import './Menu.css';
class Menu extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="col xl-1-4 menuItem unselectable">Anasayfa</div>
                <div className="col xl-1-4 menuItem unselectable">Hakkımda</div>
                <div className="col xl-1-4 menuItem unselectable">Kategoriler</div>
                <div className="col xl-1-4 menuItem unselectable">İletişim</div>
            </div>
        );
    }
}

export default Menu;