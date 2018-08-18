/*
fgdfgdf
*/
import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import ManagerArticle from './ManagerArticle/ManagerArticle';
import ManagerComment from './ManagerComment/ManagerComment';
import ManagerTags from './ManagerTags/ManagerTags';
import NewArticle from './NewArticle/NewArticle';
import AdminMenu from '../../components/adminMenu/adminMenu';
import NotFound from '../../components/notFound/notFound';
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    const { url } = this.props.match;
    return (
      <div>
        <div className="adminContainer">
          <div className="adminMenuContainer">
            <AdminMenu
              history={this.props.history}
              url={`/`}
            />
          </div>
          <div className="adminContentContainer">
            <Switch>
              <Route exact path={url} component={ManagerArticle} />
              <Route path={`${url}/ManagerComment`} component={ManagerComment} />
              <Route path={`${url}/ManagerTags`} component={ManagerTags} />
              <Route path={`${url}/NewArticle`} component={NewArticle} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}