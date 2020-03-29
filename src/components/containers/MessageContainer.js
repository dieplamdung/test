import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../Message';
import PropTpyes from 'prop-types';
// import Cart from './../Cart';
// import CartResult from './../CartResult';
// import * as Message from './../constants/Message';
// import { upToItem } from './../../actions/index';

class MessageContainer extends (Component) {
    render() {
        var { message } = this.props;
        return (
            <Message 
                message = {message}
            />
        );
    }
 }

MessageContainer.propTypes = {
    message : PropTpyes.string.isRequired
}
const mapStateToProps = state => {
    return {
        message : state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
