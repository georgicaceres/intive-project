import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './style/css/App.css'

import reducers from './reducers';

import NewVisitor from './components/NewVisitor';
import Greeting from './components/Greeting';
import VisitorList from './components/VisitorList';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
    render () {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div>
                    <div className='container'>
                        <header>
                            <img src='./imgs/intiveFDVlogo.png' className='App-logo' alt='logo' />
                        </header>
                        <div className='body-box'>
                            <NewVisitor />
                            <div className='visitors-box'>
                                <Greeting />
                                <VisitorList />
                            </div>
                        </div>
                    </div>
                    <div className='author'>
                        Georgina Melisa Cáceres
                    </div>
                </div>
            </Provider>
        );
    }

};

export default App;
