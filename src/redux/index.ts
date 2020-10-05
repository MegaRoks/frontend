import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootActionType } from './actions';

import { authReducer } from './reducers/authReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    categoryState: categoryReducer,
    errorState: errorReducer,
    loaderState: loaderReducer,
    todoState: todoReducer,
    userState: userReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type RootDispatchType = ThunkDispatch<RootStateType, any, RootActionType>;

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, compose(composeEnhancers));

