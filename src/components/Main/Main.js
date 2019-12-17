import React, { Component } from 'react';
import './Main.css';
import ArticleItem from './ArticleItem/ArticleItem';
import MainCategories from './MainCategories/MainCategories';
import PagePagination from './PagePagination/PagePagination';
import ArticleExamplePhoto from '../../assets/img/article-example.jpeg';
class Main extends Component {
    render() {
        return (
            <div className="wrap main ">
                <div className="col xl-1-12"></div>
                <div className="col xl-8-12 mainContent">
                    <div className="articleList">
                        <ArticleItem 
                        imgUrl={ArticleExamplePhoto} 
                        alt="Article Example"
                        articleHeader="Swagger Nedir?"
                        articleText="Selamlar ilk olarak bugün....."
                        />
                        <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                        <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                        <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                        <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                        <ArticleItem imgUrl={ArticleExamplePhoto} alt="Article Example" />
                    </div>
                <PagePagination />
                </div>
                <div className="col xl-2-12 mainContent">
                    <MainCategories/>
                </div>
                <div className="col xl-1-12"></div>
            </div>
        );
    }
}

export default Main;