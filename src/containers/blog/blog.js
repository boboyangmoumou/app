import React,{Component} from 'react';
import ArticleList from '../component/articleList/articleList';
import {Pagination} from 'antd';
import {connect} from 'react-redux';
export default class Blog extends Component {
    render() {
        return (
            <div>
                <ArticleList/>
            </div>
        )
    }
}