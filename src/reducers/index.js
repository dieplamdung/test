import { combineReducers } from 'redux';
import products from './../reducers/products';
import cart from './../reducers/cart';
import message from './../reducers/message';

const appReducers = combineReducers({
    products,
    cart,
    message
});
export default appReducers;