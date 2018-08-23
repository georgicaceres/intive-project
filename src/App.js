import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import NewVisitor from './components/NewVisitor';
import Greeting from './components/Greeting';
import VisitorList from './components/VisitorList';
import './style/css/App.css'

class App extends Component {
    render () {
        return (
            <Provider store={createStore(reducers)}>
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
