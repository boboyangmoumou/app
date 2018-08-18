import React, { Component } from 'react';
import ArticleCell from '../articleCell/articleCell';
export default class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { ArticleListData, history, getArticleDetail } = this.props;
    return (
      <div>
        {
          ArticleListData.map((item, index) => (
            <ArticleCell data={item} key={index} history={history} getArticleDetail={getArticleDetail} />
          ))
        }
      </div>
    )
  }
}