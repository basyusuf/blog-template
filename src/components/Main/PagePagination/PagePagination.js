import React, { Component } from 'react';
import { Pagination,Icon } from 'semantic-ui-react';
import './PagePagination.css';
class PagePagination extends Component {
    render() {
        return (
            <div className="pagePagination">
             <Pagination
                defaultActivePage={1}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={10}
            />
            </div>
        );
    }
}

export default PagePagination;