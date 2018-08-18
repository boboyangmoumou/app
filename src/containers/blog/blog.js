import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchArticle, fetchArticleDetail
} from '../../redux/actions/article';
import ArticleList from '../component/articleList/articleList';
import { fetchTag } from '../../redux/actions/manageTags';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: 'php'
    }
  }
  componentDidMount () {
    this.props.ArticleRequest(this.state.tags);
    this.props.fetchTag();
  }
  render () {
    const { ArticleListData } = this.props;
    return (
      <div>
        {ArticleListData ? <ArticleList ArticleListData={ArticleListData.articleList} history={this.props.history} getArticleDetail={this.props.get_article_detail} /> : <div>loding</div>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  let Alltags = state.ManagerTagsreducer;
  const ArticleListData = state.ArticleReducer;
  return {
    ArticleListData,
    Alltags
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTag: () => {
      dispatch(fetchTag())
    },
    ArticleRequest: (tags) => {
      dispatch(fetchArticle(tags));
    },
    get_article_detail: (id) => {
      dispatch(fetchArticleDetail(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog)