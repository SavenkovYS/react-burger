import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

function withErrorHandler(WrappedComponent, axios) {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorComfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.errorComfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        } 
    }
}

export default withErrorHandler;