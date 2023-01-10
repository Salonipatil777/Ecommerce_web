import {Middleware} from 'redux';
import { RootState } from '../Store';

export const loggerMiddleware:Middleware<{}, RootState> = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }
    
    console.log('type :' , action.type);
    console.log('paylaod :' , action.payload);
    console.log('currentState :' , store.getState());
    next(action);
    console.log('next State  :' , store.getState());
    };
    
   