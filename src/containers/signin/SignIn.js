import React, {Component} from 'react';
import classes from './SignIn.css'
import ReactTooltip from 'react-tooltip'

class SignIn extends Component {
    state = {
        email: {
            value: '',
            config: {
                maxLength: 9,
                minLength: 2
            }
        },
        password: {
            value: '',
            config: {
                maxLength: 9,
                minLength: 2
            }
        }
    };

    render() {
        return (
                <div className={classes.SignIn}>
                    <form>
                        <input type='email'
                               onChange={(event) => this.validateAndSetVal(event, 'email')}
                               placeholder='Your Email'
                               data-tip="Please enter email"
                               value={this.state.email.value}
                        />
                        <input type='password'
                               onChange={(event) => this.validateAndSetVal(event, 'password')}
                               placeholder='Password'
                               value={this.state.password.value}
                               data-tip="Please enter password"
                        />
                    </form>
                    <button type="submit" onClick={() => this.login()}>Sign In</button>
                    <ReactTooltip/>
                </div>

        );
    }

    validateAndSetVal = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    }

    login = () => {
        alert(this.state.email)
    }
}

export default SignIn;