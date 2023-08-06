import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const withPromiseHandler = (WrappedComponent, promiseConfig) => {
    return class WithPromiseHandler extends Component {
        constructor(props) {
            super(props);
            this.state = {
                promiseStatus: 'idle', // Possible values: 'idle', 'pending', 'success', 'error'
                result: null,
                error: null,
            };
        }

        handlePromise = async (query) => {
            try {
                this.setState({ promiseStatus: 'pending', result: null, error: null });
                const response = await promiseConfig.promise(query);

                if (response.success) {
                    this.setState({ promiseStatus: 'success' });
                    toast(response.message ?? "Successfully completed.");
                } else {
                    this.setState({ promiseStatus: 'error' });
                    toast(response.message ?? "Failed", {
                        type: "error"
                    });
                }
            } catch (error) {
                this.setState({ promiseStatus: 'error' });
            }
        }

        render() {
            return (
                <>
                    <WrappedComponent
                        {...this.props}
                        promiseStatus={this.state.promiseStatus}
                        promiseResult={this.state.result}
                        promiseError={this.state.error}
                        handlePromise={this.handlePromise}
                    />
                    <ToastContainer
                        theme="light"
                    />
                </>
            );
        }
    };
};