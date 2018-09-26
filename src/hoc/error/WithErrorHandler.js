import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Modal from '../../ui/modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        acknowledgeErrorHandler = () => {
            this.setState({
                error: null
            })
        };

        componentDidMount() {
            this.reqInteerceptor = axios.interceptors.request.use(req => {
                console.log("url : ", req.baseURL, req.url);
                this.setState({
                    error: null
                });
                return req;
            }, null);

            this.resInterceptor = axios.interceptors.response.use(null,
                err => {
                    console.error(err);
                    this.setState({
                        error: err.message
                    });
                    return Promise.reject(err);
                });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInteerceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return (
                <Aux>
                    <Modal
                        clicked={this.acknowledgeErrorHandler}
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