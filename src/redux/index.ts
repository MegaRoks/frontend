import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
    authState: authReducer,
    categoryState: categoryReducer,
    errorState: errorReducer,
    loaderState: loaderReducer,
    todoState: todoReducer,
    userState: userReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
