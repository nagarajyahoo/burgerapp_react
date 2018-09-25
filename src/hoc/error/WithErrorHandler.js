import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Modal from '../../ui/modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        closeModal = () => {
            this.setState({
                error : null
            })
        };

        componentDidMount() {
            axios.interceptors.response.use(null, err => {
                console.error(err);
                this.setState({
                    error: err.message
                });
                return Promise.reject(err);
            });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        cancelPurchase={this.closeModal}
                        show={this.state.error}>
                        {this.state.error}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
};

export default withErrorHandler;