import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchArticle,fetchArticleDetail
} from '../../redux/actions/article';
import ArticleList from '../component/articleList/articleList';
import {Pagination} from 'antd';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: 'javascript'
        }
    }
    componentDidMount() {
        this.props.ArticleRequest(this.state.tags);
    }
    render() {
        const {ArticleListData} = this.props;
        return (
            <div>
                {ArticleListData ? <ArticleList ArticleListData={ArticleListData.articleList} history={this.props.history} getArticleDetail={this.props.get_article_detail}/>:<div>loding</div>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.ArticleReducer);
    const ArticleListData = state.ArticleReducer;    
    return {
        ArticleListData: ArticleListData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ArticleRequest: (tags) => {
            dispatch(fetchArticle(tags));
        },
        get_article_detail: (id) => {
            dispatch(fetchArticleDetail(id))
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Blog)