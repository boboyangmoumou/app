import React, {Component} from 'react';
import ArticleCell from '../articleCell/articleCell';
export default class ArticleList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
            <ArticleCell/>
            </div>
        )
    }
}