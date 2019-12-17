import React, { Component } from 'react';
import './MainCategoryItem.css';
import {Icon} from 'semantic-ui-react';
class MainCategoryItem extends Component {
    render() {
        return (
            <li className="mainCategoryLi">
                <a href={this.props.categoryUrl}><Icon name={this.props.categoryIcon} /> {this.props.categoryName}({this.props.categoryCount})</a>
            </li>
        );
    }
}

export default MainCategoryItem;