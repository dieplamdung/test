import * as types from './../components/constants/ActionType';


export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        product // xoa dua vao id cua product
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type : types.UPDATE_QUANTITY,
        product, // xoa dua vao id cua product
        quantity
    }
}