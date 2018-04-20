import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as newreducer} from './reducers/index';
import {userReducer} from './reducers/user';
import {checkUser} from './reducers/checkUser'
import {ArticleReducer,ArticleDetailReducer} from './reducers/article';
import {AddArticleReducer} from './reducers/newArticle';
import {ManagerTagsreducer} from './reducers/manageTags';
const win = window;

const reducer = combineReducers({
    checkUser: checkUser,
    newreducer: newreducer,
    userReducer: userReducer,
    ArticleReducer: ArticleReducer,
    ArticleDetailReducer: ArticleDetailReducer,
    AddArticleReducer: AddArticleReducer,
    ManagerTagsreducer: ManagerTagsreducer
})

const middlewares = [thunkMiddleware];
if(process.env.NODE_ENV !== 'production'){
    middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
