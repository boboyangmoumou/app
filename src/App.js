import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './containers/home/home';
import {
  checkUserInfo
} from './redux/actions/index';
class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.checkUser();
  }
  render() {
    const {checkUserInfo} = this.props;
    console.log(checkUserInfo);
    return (
      <div className="App">
        <Home/>
        {/* {checkUserInfo} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const checkUserInfo = state.checkUser;  
  console.log(checkUserInfo);
  return {
    checkUserInfo: checkUserInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () => {
      dispatch(checkUserInfo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
