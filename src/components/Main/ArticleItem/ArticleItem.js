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
                   <div className="articleHeader">Hey Article</div>
                   <div className="articleText">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem lacus, morbi sed ornare nulla hendrerit nunc aliquet. In donec purus quisque sed malesuada pellentesque diam non augue. Non at id at ut eget aliquam. Adipiscing massa dui, nec ac etiam
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem lacus, morbi sed ornare nulla hendrerit nunc aliquet. In donec purus quisque sed malesuada pellentesque diam non augue. Non at id at ut eget aliquam. Adipiscing massa dui, nec ac etiam
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem lacus, morbi sed ornare nulla hendrerit nunc aliquet. In donec purus quisque sed malesuada pellentesque diam non augue. Non at id at ut eget aliquam. Adipiscing massa dui, nec ac etiam
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

export default ArticleItem;