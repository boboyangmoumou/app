import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchShopcart 
} from '../../redux/actions/index';
import {
    fetchUser
} from '../../redux/actions/user';
import HomeView from '../component/homeView';
import HeaderMenu from '../header/header';
// import StylePhone from '../component/StylePhone';
import '../component/homeView.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // newurl: ''
        }
    }
    componentDidMount() {
        this.props.onSelectCity();
    }
    handleComment(comment) {
        console.log(comment);
    }
    render() {
        let {name,desc,price,style,isSelected,activeStyleUrl,storage,status,login,userData} = this.props;
        return(
            <div className="containerwrapper">
                <HeaderMenu login={login} userData={userData}/>
                <HomeView 
                status = {status}
                name = {name}
                desc = {desc}
                price = {price}
                style = {style}
                isSelected = {isSelected}
                activeStyleUrl = {activeStyleUrl}
                storage  = {storage}
                onSubmit={(comment) => this.handleComment(comment)}
            />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const goodData = state.newreducer;
    const userData = state.userReducer;
    return {
        status: goodData.status,
        desc: goodData.desc,
        name: goodData.name,
        price: goodData.price,
        style: goodData.style,
        isSelected: goodData.isSelected,
        activeStyleUrl: goodData.activeStyleUrl,
        storage: goodData.storage,
        userData: userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity: () => {
            dispatch(fetchShopcart());
        },
        login: (userName,userPwd) => {
            console.log(userName,userPwd);
            dispatch(fetchUser(userName,userPwd))
        }
    }       
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)