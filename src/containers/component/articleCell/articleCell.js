import React, {Component} from 'react';
import style from './style.css'
export default class ArticleCell extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {data,history,getArticleDetail} = this.props;
        console.log(data);
        return(
            <div className={style.container} onClick={() => {history.push(`/detail/${data._id}`,{id:data._id});getArticleDetail(data._id)}}>
                    <p>{data.title}</p>
                <div>
                    <p>
                        {data.tags}
                    </p>
                    <p>
                        阅读全文
                    </p>
                </div>
            </div>
        )
    }
}