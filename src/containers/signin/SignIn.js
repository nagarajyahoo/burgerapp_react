import React, {Component} from 'react';
import classes from './SignIn.css'
import ReactTooltip from 'react-tooltip'
import * as AuthActions from '../../model/store/actions/AuthActions'
import {connect} from 'react-redux'

class SignIn extends Component {
    state = {
        email: {
            value: ''
        },
        password: {
            value: ''
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
                        <div className={classes.ButtonDiv}>
                            <button type="button" onClick={() => this.login()}>Signin</button>
                        </div>
                    </form>

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
        this.props.signup(this.state.email, this.state.password);
    }
}

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(AuthActions.login(email, password)),
        signup: (email, password) => dispatch(AuthActions.signup(email, password)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);