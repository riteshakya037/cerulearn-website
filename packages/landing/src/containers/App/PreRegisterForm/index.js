import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import CheckBox from 'common/components/Checkbox/index';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import ContactFormWrapper from './preregisterForm.style';
import 'rc-tabs/assets/index.css';
import LoginImage from 'common/assets/image/app/preregister.svg';
import { withPromiseHandler } from 'containers/App/PromiseHandler'
import { PreRegisterService } from 'services/preregister'

const service = new PreRegisterService();

const submitContractForm = async (contactInfo) => {
    const response = await service.submit(contactInfo);
    return response;
};

const PreRegisterForm = ({
    row,
    col,
    btnStyle,
    titleStyle,
    contentWrapper,
    descriptionStyle,
    promiseStatus,
    handlePromise
}) => {
    const [phoneError, setPhoneError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subscribe: true,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (promiseStatus == "success") {
            resetFields();
        }
    }, [promiseStatus]);

    const resetFields = () => {
        setCount(count + 1);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            subscribe: true,
        });
    }

    const handleChange = (name, value) => {
        if (name == 'phone') {
            const phonePattern = /(\+977)?[9][6-9]\d{8}/;

            if (phonePattern.test(value)) {
                setPhoneError('');
            } else {
                setPhoneError('Please enter a valid phone number.');
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneError) return;
        handlePromise(formData);
    };

    return (
        <ContactFormWrapper>
            <Box className="row" {...row}>
                <Box className="col imageCol" {...col}>
                    <Image
                        className="patternImage"
                        src={LoginImage?.src}
                        alt="Login Banner"
                    />
                </Box>
                <Box className="col tabCol" {...col}>
                    <Box {...contentWrapper}>
                        <Heading content="Join Our Adventure!" {...titleStyle} />
                        <Text
                            content="Be part of the beta excitement! Signups are pouring in, but we're temporarily holding tight to fine-tune."
                            {...descriptionStyle}
                        />
                        <form key={'contact-form' + count} onSubmit={handleSubmit}>
                            <Input
                                inputType="text"
                                id="name"
                                name="name"
                                label="Name"
                                required
                                isMaterial={true}
                                disabled={promiseStatus === 'pending'}
                                onChange={handleChange}
                            />
                            <Input
                                inputType="email"
                                id="email"
                                name="email"
                                label="Email"
                                required
                                isMaterial={true}
                                disabled={promiseStatus === 'pending'}
                                onChange={handleChange}
                            />
                            <Input
                                inputType="number"
                                id="phone"
                                name="phone"
                                label="Phone"
                                required
                                error={phoneError}
                                isMaterial={true}
                                disabled={promiseStatus === 'pending'}
                                onChange={handleChange}
                            />
                            <Input
                                inputType="textarea"
                                id="message"
                                name="message"
                                label="Message"
                                isMaterial={true}
                                disabled={promiseStatus === 'pending'}
                                onChange={handleChange}
                            />
                            <div>
                                <CheckBox
                                    id="subscribe"
                                    htmlFor="subscribe"
                                    isChecked={formData.subscribe}
                                    disabled={promiseStatus === 'pending'}
                                    labelText="Subscribe to Newsletter"
                                />
                                <br />
                                <Fragment>
                                    <Button
                                        className="default"
                                        title="Submit"
                                        disabled={phoneError}
                                        type="submit" {...btnStyle}
                                        isLoading={promiseStatus === 'pending'}
                                    />
                                </Fragment>
                            </div>
                        </form>
                    </Box>
                </Box>
            </Box>
        </ContactFormWrapper>
    );
};

// LoginModal style props
PreRegisterForm.propTypes = {
    row: PropTypes.object,
    col: PropTypes.object,
    titleStyle: PropTypes.object,
    contentWrapper: PropTypes.object,
    descriptionStyle: PropTypes.object,
};

// LoginModal default style
PreRegisterForm.defaultProps = {
    // Team member row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
    },
    // Team member col default style
    col: {
        width: [1, 1 / 2],
    },
    // Title default style
    titleStyle: {
        fontSize: ['36px', '50px'],
        fontWeight: '400',
        color: '#20201D',
        letterSpacing: '-0.025em',
    },
    // Description default style
    descriptionStyle: {
        color: 'rgba(52, 61, 72, 0.8)',
        fontSize: '15px',
        lineHeight: '26px',
        letterSpacing: '-0.025em',
    },
    // Content wrapper style
    contentWrapper: {
        pl: ['32px', '38px', '40px', '56px'],
        pr: '32px',
    },
    // Default button style
    btnStyle: {
        minWidth: '156px',
        fontSize: '14px',
        fontWeight: '500',
    },
};


const PreRegisterFormWithSubscription = withPromiseHandler(PreRegisterForm, {
    promise: submitContractForm,
});

export default PreRegisterFormWithSubscription;
