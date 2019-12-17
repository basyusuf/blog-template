import React, { Component } from 'react';
import './MainCategories.css';
import MainCategoryItem from './MainCategoryItem/MainCategoryItem';
class MainCategories extends Component {
    render() {
        return (
            <div className="mainCategories">
                <div className="mainCategoryHeader">Kategoriler</div>
                <div>
                    <ul>
                        <MainCategoryItem 
                        categoryUrl="/"
                        categoryName="ReactJS"
                        categoryCount ="3"
                        categoryIcon="react"
                        />
                        <MainCategoryItem 
                        categoryUrl="/"
                        categoryName="NodeJS"
                        categoryCount ="6"
                        categoryIcon="node js"
                        />
                        <MainCategoryItem 
                        categoryUrl="/"
                        categoryName="Laravel"
                        categoryCount ="2"
                        categoryIcon="laravel"
                        />
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainCategories;