import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from 'containers/App/MainContainer';
import LoginImage from 'common/assets/image/app/error-404.svg';
import Link from 'next/link';
import Button from 'common/components/Button';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import Card from 'common/components/Card';
import Fade from 'react-reveal/Fade';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import FeatureBlock from 'common/components/FeatureBlock';
import Heading from 'common/components/Heading';

const Custom404 = ({
  row,
  col,
  sectionWrapper,
  button,
  textAreaRow,
  textArea,
  imageAreaRow,
  imageArea,
  sectionSubTitle,
  imageWrapper,
  imageWrapperOne,
  title,
  btnStyle
}) => {
  return (
    <MainContainer>

      <Link href="/">
        <a>
          <Fade left>
            <NextImage src={LoginImage} alt="Info Image One" />
          </Fade>
        </a>
      </Link>
    </MainContainer>
  );
};


// LoginModal style props
Custom404.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// LoginModal default style
Custom404.defaultProps = {
  sectionWrapper: {
    as: 'section',
  },
  row: {
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};


export default Custom404;
