import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { Input, Select, Button, Modal } from 'antd';
import { actions, FetchNewArticle } from '../../../redux/actions/NewArticle';
import { fetchTag } from '../../../redux/actions/manageTags';
import style from './style.css';
const { update_content, update_tags, update_title } = actions;
const Option = Select.Option;
class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      title: [],
      tags: [],
      content: [],
      options: [],
      modalVisible: false
    };
  }
  // 发表
  publishArticle () {
    let articleData = {};
    articleData.title = this.props.title;
    articleData.content = this.props.content;
    articleData.tags = this.props.tags;
    this.props.FetchNewArticle(articleData.title,articleData.content,articleData.tags);
  }
  // 正文内容
  onChanges (e) {
    this.props.update_content(e.target.value);
  }
  // 标题输入框
  titleOnChange (e) {
    this.props.update_title(e.target.value)
  }
  // 选择标签
  selectTags (value) {
    this.props.update_tags(value)
  };
  // 预览
  preView () {
    this.setState({
      modalVisible: true
    })
  }
  componentDidMount () {
    this.props.fetchTag();
  }
  handleOk () {
    this.setState({
      modalVisible: false
    })
  };
  render () {
    const { AllTags, title, content, tags } = this.props;
    return (
      <div>
        <h2>发文</h2>
        <div className="newArticlecontainer">
          <span className="subTitle">标题</span>
          <Input
            className={style.titleInput}
            placeholder={'请输入文章标题'}
            type='text'
            value={title}
            onChange={this.titleOnChange.bind(this)}
          />
          <span className="subTitle">正文</span>
          <textarea
            className="textArea"
            value={content}
            onChange={this.onChanges.bind(this)}
          />
          <span className={style.subTitle}>分类</span>
          <Select
            mode="multiple"
            className="titleInput"
            placeholder="请选择分类"
            onChange={this.selectTags.bind(this)}
            value={tags}
          >
            {
              AllTags.map((item, index) => (
                <Option key={item}>{item}</Option>
              ))
            }
          </Select>
          <div className={style.bottomContainer}>
            <Button type="primary"
              onClick={this.publishArticle.bind(this)}
              className={style.buttonStyle}
            >发布</Button>
            {/* <Button type="primary" onClick={this.saveArticle.bind(this) }
                                className={style.buttonStyle}>保存</Button> */}
            <Button type="primary" onClick={this.preView.bind(this)}
              className={style.buttonStyle}>预览</Button>
          </div>
        </div>
        <Modal
          visible={this.state.modalVisible}
          title="文章预览"
          onOk={this.handleOk.bind(this)}
          width={'900px'}
          onCancel={this.handleOk.bind(this)}
        >
          <div className={style.modalContainer}>
            <div id='preview' className={style.testCode}>
              {remark().use(reactRenderer).processSync(this.props.content).contents}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let AllTags = state.ManagerTagsreducer;
  let { title, content, tags } = state.AddArticleReducer
  return {
    AllTags,
    title,
    content,
    tags
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    FetchNewArticle: (title,content,tags) => {
      dispatch(FetchNewArticle(title,content,tags));
    },
    fetchTag: (tag) => {
      dispatch(fetchTag(tag))
    },
    update_title: (title) => {
      dispatch(update_title(title))
    },
    update_content: (content) => {
      dispatch(update_content(content))
    },
    update_tags: (tags) => {
      dispatch(update_tags(tags))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewArticle)