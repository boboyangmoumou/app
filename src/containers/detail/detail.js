import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import style from './style.css'
import {fetchArticleDetail} from '../../redux/actions/article';
import { Z_BEST_COMPRESSION } from 'zlib';
class Detail extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        const {get_article_detail,isFetching} = this.props;
        let DataStatus = JSON.stringify(get_article_detail) === '{}';
        if (isFetching) {
            return(
                <div>
                    { DataStatus || get_article_detail === undefined ? <div>loding</div> :
                    <div>  
                         <div className={style.container}>
                        <h2>{get_article_detail.title }</h2>
                        <h3>{get_article_detail.tags}</h3>
                        <div className={style.articleInfo}>
                            <article>{get_article_detail.content}</article> 
                        </div>
                        </div>
                    </div>
                    }
                </div>                                                 
            )
        } else {
            return <div>loading</div>
        }
            
        }
    
    componentDidMount() {        
        this.props.fetch_get_article_detail(this.props.location.state.id)
    }
}

const mapStateToProps = (state) => {    
    console.log(state);
    const isFetching = state.ArticleDetailReducer.isFetching;
    const get_article_detail = state.ArticleDetailReducer.articleDetail === undefined? state.ArticleDetailReducer.articleDetail :state.ArticleDetailReducer.articleDetail;       
    return {
            get_article_detail:get_article_detail,
            isFetching: isFetching
        }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetch_get_article_detail: (id) => {
            dispatch(fetchArticleDetail(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)