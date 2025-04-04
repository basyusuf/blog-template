import React, { Component } from 'react';
import './ArticleItem.css';
import { Button, Icon } from 'semantic-ui-react'
class ArticleItem extends Component {
    render() {
        return (
            <div className="wrap articleItem">
                <div className="col xl-3-10">
                 <img  className="articleImg" src={this.props.imgUrl} alt={this.props.imgAlt}/>
                </div>
                <div className="col xl-7-10 articleRightSide">
                   <div className="articleHeader">{this.props.articleHeader}</div>
                   <div className="articleText">
                    <p>
                        {this.props.articleText}
                   </p>
                   </div>
                   <div className="articleButton">
                   <Button animated='fade'>
                    <Button.Content visible>Devamını Oku <Icon name="arrow circle right"/></Button.Content>
                    <Button.Content hidden>Yazının devamını oku </Button.Content>
                    </Button> 
                   </div>
                </div>
            </div>
        );
    }
}
ArticleItem.defaultProps = {
    articleHeader:"Default Article Header",
    articleText:"Default Article Text"
}
export default ArticleItem;