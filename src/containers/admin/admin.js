import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {connect} from 'react-redux';
import ManagerArticle from './ManagerArticle/ManagerArticle';
import ManagerComment from './ManagerComment/ManagerComment';
import ManagerTags from './ManagerTags/ManagerTags';
import NewArticle from './NewArticle/NewArticle';
import AdminMenu from '../../components/adminMenu/adminMenu';
import NotFound from '../../components/notFound/notFound';
import style from './style.css';
export default class Admin extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {url} = this.props.match;
        return (
            <div>
                <div className="container">
                    <div className="menuContainer">
                        <AdminMenu 
                        history={this.props.history}
                        url={`/`}
                        />
                    </div>
                    <div className="contentContainer">
                        <Switch>
                            <Route exact path={url} component={ManagerArticle}/>
                            <Route path={`${url}/ManagerComment`} component={ManagerComment}/>
                            <Route path={`${url}/ManagerTags`} component={ManagerTags}/>
                            <Route path={`${url}/NewArticle`} component={NewArticle}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}