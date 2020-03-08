import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import user from '../reducers/user';
import message from '../reducers/message';
import chat from '../reducers/chat';
import groups from '../reducers/group';
import * as types from '../types';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.CREATE_REQUEST:
            return true;
        case types.REQUEST_SUCCESS:
        case types.REQUEST_FAILURE:
            return false;
        default:
            return state;
    }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    isFetching,
    user,
    message,
    chat,
    routing,
    groups
});

export default rootReducer;
