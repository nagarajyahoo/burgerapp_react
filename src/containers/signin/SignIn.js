import React, {Component} from 'react';
import classes from './SignIn.css'
import ReactTooltip from 'react-tooltip'
import * as AuthActions from '../../model/store/actions/AuthActions'
import {connect} from 'react-redux'
import Spinner from "../../ui/spinner/Spinner";
import Aux from "../../hoc/Aux";

class SignIn extends Component {
    state = {
        email: {},
        password: {},
        isNewUser: false
    };

    render() {
        const loginButtonText = this.state.isNewUser ? 'Signup' : 'Signin';
        const newUserButtonText = this.state.isNewUser ? 'Existing User' : 'New User';
        const content = this.props.processing ?
            <Spinner/> :
            <Aux>
                <div className={classes.Error}>
                    <p>{this.props.error}</p>
                </div>
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
                        <button type="button" onClick={() => this.authenticate()}>{loginButtonText}</button>
                    </div>
                    <div className={classes.ButtonDiv2}>
                        <button type='button' onClick={() => this.swithType()}>{newUserButtonText}</button>
                    </div>
                </form>

                <ReactTooltip/>
            </Aux>;
        return (<div className={classes.SignIn}>{content}</div>);
    }

    validateAndSetVal = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    };

    authenticate = () => {
        this.props.startAuth();
        if (this.state.isNewUser) {
            this.props.signup(this.state.email, this.state.password);
        }
        else {
            this.props.login(this.state.email, this.state.password);
        }
    }

    swithType = () => {
        this.setState({
            isNewUser: !this.state.isNewUser
        });
    }
}

const mapStateToProps = (state) => {
    return {
        processing: state.myauth.processing,
        error: state.myauth.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAuth: () => dispatch(AuthActions.authStarted()),
        login: (email, password) => dispatch(AuthActions.login(email, password)),
        signup: (email, password) => dispatch(AuthActions.signup(email, password))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);