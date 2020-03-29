import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './../CartItem';
import Cart from './../Cart';
import CartResult from './../CartResult';
import * as Message from './../constants/Message';
import { actRemoveProductInCart , actChangeMessage,actUpdateQuantity } from './../../actions/index';

class CartContainer extends (Component) {
    render() {
        var { cart } = this.props;
        return (
            <Cart >
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteInCard,onChangeMessage,onUpdateQuantity } = this.props;
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        // var { onUpToItem } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key = {index}
                    item = {item}
                    index = {index}
                    onDeleteInCard = {onDeleteInCard}
                    onChangeMessage = {onChangeMessage}
                    onUpdateQuantity = {onUpdateQuantity}
                />
            })
        }
        return result
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = { cart } />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })
    ).isRequired,
    onDeleteInCard : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateQuantity : PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        message : state.message
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteInCard : (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateQuantity : (product, quantity) => {
            dispatch(actUpdateQuantity(product, quantity))
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
