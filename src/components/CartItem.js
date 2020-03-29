/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as Message from './constants/Message';

class CartItem extends (Component) {
    render() {
        var { product,quantity } = this.props.item;
        return (
            <tr>
                <th scope="row">
                    <img src={product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = {()=> {this.onUpdateQuantity(product, quantity - 1)}}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = {()=> {this.onUpdateQuantity(product, quantity + 1)}}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{product.price * quantity}$</td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => { this.onDeleteInCard(product) }}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    onDeleteInCard = (product) => {
        this.props.onDeleteInCard(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            this.props.onUpdateQuantity(product,quantity);
        }
        this.props.onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
    }
}

export default CartItem;
