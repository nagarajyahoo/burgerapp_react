import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from '../backdrop/Backdrop';
import Button from '../button/Button';
import classes from './Modal.css'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return ((nextProps.show !== this.props.show) ||
            (nextProps.children !== this.props.children));
    }


    componentWillUpdate() {
        console.log('[Modal] : comp will update');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show}
                          cancelPurchase={this.props.cancelPurchase}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>

                    {this.props.children}

                    <Button clicked={this.props.continuePurchase} type="Success">Continue</Button>
                    <Button clicked={this.props.cancelPurchase} type="Danger">Cancel</Button>
                </div>
            </Aux>

        );
    }
}

export default Modal;