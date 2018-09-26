import React, {Component} from 'react';
import AppLayout from './containers/AppLayout'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <AppLayout/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
