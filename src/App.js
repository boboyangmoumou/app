import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './containers/home/home';
import HeaderMune from './components/header/header';
import Detail from './containers/detail/detail';
import Blog from './containers/blog/blog';
import NotFound from './components/notFound/notFound';
import { fetchTag } from './redux/actions/manageTags';
import {
  fetchArticle
} from './redux/actions/article';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDisMount () {
    this.props.fetchTag()
  }
  render () {
    const { url } = this.props.match;
    return (
      <div className="App">
        <HeaderMune fetchArticle={(tag) => this.props.fetchArticle(tag, 1)} Alltags={this.props.Alltags} history={this.props.history} />
        <div className="contentContainer">
          <Switch>
            <Route exact path={url} component={Blog} />
            <Route path={`/detail/:id`} component={Detail} />
            <Route path={`/:tag`} component={Blog} />
            <Route path={'/home'} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>

        {/* <Home/> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  let Alltags = state.ManagerTagsreducer;
  return {
    Alltags
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTag: () => {
      dispatch(fetchTag())
    },
    fetchArticle: (tags) => {
      dispatch(fetchArticle(tags));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
