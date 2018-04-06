import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import style from './style.css'
import {fetchArticleDetail} from '../../redux/actions/article';
class Detail extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        const { get_article_detail} = this.props;
        let DataStatus = JSON.stringify(get_article_detail) === '{}';
            return(
                <div>
                    { DataStatus || get_article_detail === undefined ? <div>loding</div> :
                    <div>  
                         <div className={style.container}>
                        <h2>{get_article_detail.data.title }</h2>
                        <h3>{get_article_detail.data.tags}</h3>
                        <div className={style.articleInfo}>
                            <article>{get_article_detail.data.content}</article> 
                        </div>
                        </div>
                    </div>
                    }
                </div>                                                 
            )
        }
    
    componentDidMount() {        
        this.props.fetch_get_article_detail(this.props.location.state.id)
    }
}

const mapStateToProps = (state) => {    
    const get_article_detail = state.ArticleDetailReducer.articleDetail == undefined? state.ArticleDetailReducer.articleDetail :state.ArticleDetailReducer.articleDetail;       
    return {
            get_article_detail:get_article_detail
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