import React, { useState, Fragment } from 'react';
import MainContainer from 'containers/App/MainContainer';
import ContactForm from 'containers/App/ContactForm';

const Contact = () => {
  return (
    <MainContainer>
      <ContactForm />
    </MainContainer>
  );
};

export default Contact;