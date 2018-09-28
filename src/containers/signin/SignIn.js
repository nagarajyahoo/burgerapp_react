import React, {Component} from 'react';
import Button from '../../ui/button/Button';
import classes from './SignIn.css'

class SignIn extends Component {
    state = {
        email: {},
        password: {}
    };

    render() {
        return (
            <div className={classes.SignIn}>
                <form>
                    <input type='email' placeholder='Your Email'/>
                    <input type='password' placeholder='Password'/>
                </form>
                <button type="button" onClick={() => alert('hello')}>Sign In</button>
            </div>
        );
    }
}

export default SignIn;