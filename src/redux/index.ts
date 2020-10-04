import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
    authState: authReducer,
    categoryState: categoryReducer,
    errorState: errorReducer,
    loaderState: loaderReducer,
    userState: userReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
