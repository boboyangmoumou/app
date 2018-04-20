import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import {Input, Select, Button, Modal} from 'antd';
import {actions,FetchNewArticle} from '../../../redux/actions/NewArticle';
import {fetchTag} from '../../../redux/actions/manageTags';
import style from './style.css';
// const {update_content, update_tags, update_title, save_article} = actions;
const Option = Select.Option;
class NewArticle extends Component{
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            title:[],
            tags:[],
            content:[]
        }
    }
    publishArticle() {
        let articleData = {};
        articleData.title = '1234rgfsdfsd56';
        articleData.content='12423423de';
        articleData.tags = 'javascript';
        this.props.save_article(articleData);
    }
    // 正文内容
    onChange(e) {

    }
    // 标题输入框

    selectTags(value) {

    }
    componentDidMount() {
        this.props.fetchTag();
    }
    render() {
        const {AllTags} = this.props;
        return (
            <div>
                <h2>发文</h2>
                <div className="newArticlecontainer">
                    <span className="subTitle">标题</span>
                    <Input 
                        className={style.titleInput}
                        placeholder={'请输入文章标题'}
                        type='text'
                    />
                    <span className="subTitle">正文</span>
                    <textarea
                        className="textArea"
                        // onChange={this.onChanges.bind(this)}
                        />
                    <span className={style.subTitle}>分类</span>
                    <Select 
                        mode="multiple"
                        className="titleInput"
                        placeholder="请选择分类"
                        onChange={this.selectTags.bind(this)}
                    >
                    {
                        AllTags.map((item,index) => (
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
                                className={style.buttonStyle}>保存</Button>
                        <Button type="primary" onClick={this.preView.bind(this)}
                                className={style.buttonStyle}>预览</Button> */}
                    </div>                    
                </div>
                <Modal>
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
    console.log(state.ManagerTagsreducer);
    let AllTags = state.ManagerTagsreducer
    return {
        AllTags : AllTags
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        save_article: (articleData) => {
            dispatch(FetchNewArticle(articleData));
        },
        fetchTag: () => {
            dispatch(fetchTag())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewArticle)