import PureRenderMixin from 'react-addons-pure-render-mixin'
import React, { Component } from 'react';
import style from './style.css'
// import {actions} from '../../resucers/adminManagerArticle';
// import {actions as FrontAction} from '../../reducers/frontReducer';
// import Admin from '../admin/Admin';
// const {get_article_detail,delete_article,edit_article} = actions;
// const {get_article_detail} = FrontAction;
export default class ManagerArticle extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <div>
        <h2>文章管理</h2>
        <div className={style.articleListContainer}>
          434
        </div>
      </div>

    )
  }
}