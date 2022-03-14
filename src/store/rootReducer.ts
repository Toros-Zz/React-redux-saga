import { SET_POSTS, SET_ACTIVE_USER, SET_USERS, LOADING_USERS, LOADING_POSTS } from './types';
import { AnyAction } from 'redux';

export type RootState = {
    users: User[],
    activeUserId: string,
    allPosts: Post[],
    isUsersLoading: boolean;
    isPostsLoading: boolean;
};

const initialState: RootState = {
    users: [],
    activeUserId: '0',
    allPosts: [],
    isUsersLoading: false,
    isPostsLoading: false,
};

export const rootReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){ 
        case SET_USERS:
            return {
                ...state,
                isUsersLoading: false,
                users: [...action.payload],
            };
        
        case SET_ACTIVE_USER:
            return { ...state, activeUserId: action.payload };
        
            case SET_POSTS:
                return { 
                    ...state,
                    isPostsLoading: false,
                    allPosts: action.payload,
                };
                
        case LOADING_USERS:
            return { ...state, isUsersLoading: true };
        
        case LOADING_POSTS:
            return { ...state, isPostsLoading: true };
        
        default:
        return state;
    }
};