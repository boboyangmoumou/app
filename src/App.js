import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './containers/home/home';
import HeaderMune from './components/header/header';
import Detail from './containers/detail/detail';
import Blog from './containers/blog/blog';
import NotFound from './components/notFound/notFound';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() {
    const {url} = this.props.match;
      return (
        <div className="App">
          <HeaderMune/>
          <div className="contentContainer">
            <Switch>              
              <Route exact path={url} component={Blog}/>
              <Route path={`/detail/:id`} component={Detail}/>
              <Route path={`/:tag`} component={Blog}/>  
              <Route path={'/home'} component={Home}/>            
              <Route component={NotFound}/>
            </Switch>
          </div>
        
          {/* <Home/> */}
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  // const checkUserInfo = state.checkUser;  
  return {
    // checkUserInfo: checkUserInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // checkUser: () => {
    //   dispatch(checkUserInfo());
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
