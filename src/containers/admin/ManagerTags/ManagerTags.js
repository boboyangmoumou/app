import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tag, Input, Tooltip,Button} from 'antd';
// import {actions} from '../../actions/managerTags';
import {fetchTag,fetchDeltag,fetchAddTag} from '../../../redux/actions/manageTags';
import '../style.css';
class ManagerTags extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tags: ['首页','HTML','CSS','JAVASCRIPT'],
            inputVisible: false,
            inputValue: '',
        }
    }
    componentDidMount() {
        this.props.fetchTag();
    }
    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };
    // 删除标签
    handleClose = (removedTag) => {
        this.props.fetchDeltag(removedTag)
    }    
    // 添加标签
    handleInputConfirm = () => {
        this.props.fetchAddTag(this.state.inputValue);
        this.setState({
            inputVisible: false,
            inputValue: ''
        });
    }
    saveInputRef = input => this.input = input;
    render() {
        const {inputVisible,inputValue} = this.state;
        const {Alltags} = this.props;
        console.log(Alltags);
        return (
            <div>
                <h2 className="titleStyle">标签管理</h2>
                {
                    Alltags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag className = "tagStyle" key={index} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0,20)}...`:tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip key={tag} title={tag}>{tagElem}></Tooltip> : tagElem;
                    })
                }
                {inputVisible && (
                    <Input 
                    className="tagStyle"
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{width:108}}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && <Button className="tagStyle" size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.ManagerTagsreducer);
    let Alltags = state.ManagerTagsreducer;
    return{
        Alltags
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTag: () => {
            dispatch(fetchTag())
        },
        fetchDeltag: (removedTag) => {
            dispatch(fetchDeltag(removedTag))
        },
        fetchAddTag: (addTag) => {
            dispatch(fetchAddTag(addTag))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagerTags)