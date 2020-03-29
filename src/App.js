/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './components/Header';
import MessageContainer from './components/containers/MessageContainer';
import Footer from './components/Footer';
import ProductContainer from './components/containers/ProductContainer';
import CartContainer from './components/containers/CartContainer';

function App() {
    return (
        <div>
            < Header />
            <main id="mainContainer">
                <div className="container">
                    <ProductContainer />
                    <MessageContainer />
                    <CartContainer />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
