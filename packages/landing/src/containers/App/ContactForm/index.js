import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import CheckBox from 'common/components/Checkbox/index';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import ContactFormWrapper from './contactForm.style';
import 'rc-tabs/assets/index.css';
import LoginImage from 'common/assets/image/app/login-bg.jpg';
import { withPromiseHandler } from 'containers/App/PromiseHandler'
import { ContactUsService } from 'services/contact'

const service = new ContactUsService();

const submitContractForm = async (contactInfo) => {
    const response = await service.submit(contactInfo);
    return response;
};

const ContactForm = ({
    row,
    col,
    btnStyle,
    titleStyle,
    contentWrapper,
    descriptionStyle,
    promiseStatus,
    handlePromise
}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
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
            subject: '',
            message: '',
            subscribe: true,
        });
    }

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <Heading content="Contact Us" {...titleStyle} />
                        <Text
                            content="We'd love to hear from you! Please fill out the form below to get in touch."
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
                                inputType="text"
                                id="subject"
                                name="subject"
                                label="Subject"
                                required
                                isMaterial={true}
                                disabled={promiseStatus === 'pending'}

                                onChange={handleChange}
                            />
                            <Input
                                inputType="textarea"
                                id="message"
                                name="message"
                                label="Message"
                                required
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
ContactForm.propTypes = {
    row: PropTypes.object,
    col: PropTypes.object,
    titleStyle: PropTypes.object,
    contentWrapper: PropTypes.object,
    descriptionStyle: PropTypes.object,
};

// LoginModal default style
ContactForm.defaultProps = {
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


const ContactFormWithSubscription = withPromiseHandler(ContactForm, {
    promise: submitContractForm,
});

export default ContactFormWithSubscription;
