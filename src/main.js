import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    checkUserInfo
  } from './redux/actions/index';
import {
    fetchUser
} from './redux/actions/user';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import App from './App.js'
import HeaderMenu from './containers/header/header';
import NotFound from './components/notFound/notFound';
import Admin from './containers/admin/admin';
class Main extends Component {
    componentDidMount() {
        this.props.checkUser();
      }
    render() {
        let {login,userData,UserInfo} = this.props;
        let userDataInfo = userData || userData.result.userName;
        return(
            <div>
            <HeaderMenu login={login} userData={userDataInfo} UserInfo={UserInfo}/>
            <Router>
                <div className="contentContainer">
                    <Switch>
                        <Route exact path='/404' component={NotFound}/>
                        <Route path='/admin' component={Admin}/>
                        <Route component={App}/>
                    </Switch>
                </div>
            </Router>
            {/* <App /> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const userData = state.userReducer.userInfo;
    const checkUserInfo = state.checkUser; 
    return {
        userData: userData,
        UserInfo : checkUserInfo.result 
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        login: (userName,userPwd) => {
            dispatch(fetchUser(userName,userPwd))
        },
        checkUser: () => {
            dispatch(checkUserInfo());
        }
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Main)