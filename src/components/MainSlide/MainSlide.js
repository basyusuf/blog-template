import React, { Component } from 'react';
import './MainSlide.css';
import { Input } from 'semantic-ui-react';
class MainSlide extends Component {
    render() {
        return (
            <div className="mainSlide">
                <div className="mainSlideInput">
                <Input size="huge" fluid icon='search' placeholder='Hangi konuyu arıyordunuz?' />
                </div>
            </div>
        );
    }
}

export default MainSlide;