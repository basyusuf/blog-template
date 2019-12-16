import React, { Component } from 'react';
import './Main.css';
import ArticleItem from './ArticleItem/ArticleItem';
import ArticleExamplePhoto from '../../assets/img/article-example.jpeg';
class Main extends Component {
    render() {
        return (
            <div className="wrap main">
                <div className="col xl-1-12"></div>
                <div className="col xl-10-12 mainContent">
                    <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                    <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                </div>
                <div className="col xl-1-12"></div>
            </div>
        );
    }
}

export default Main;