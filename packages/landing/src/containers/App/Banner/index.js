import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import FeatureBlock from 'common/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/components/UI/Container';
import arrowIcon from 'common/assets/image/app/banner-arrow.svg'
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import {
  DiscountWrapper,
  DiscountLabel,
  DownloadButtonWrapper,
  ButtonWrapper,
  EmailWrapper,
} from './banner.style';
import { BANNER_DATA } from 'common/data/App/Banner'
import AppScreenshot from 'common/assets/image/app/mobile.png';
import { withPromiseHandler } from 'containers/App/PromiseHandler'
import { NewsletterSubscriptionService } from 'services/newsletter'
import { SHOW_FOR_RELEAE } from 'common/constants';

const service = new NewsletterSubscriptionService();

const subscribeToNewsletter = async (email) => {
  const response = await service.subscribe(email);
  if (!response.success && response.code == "ValidationError") {
    return {
      ...response,
      message: "Please proviede a valid email address"
    }
  }
  return response;
};

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  image,
  textArea,
  imageArea,
  updateTitle,
  button,
  btnStyle,
  updateText,
  promiseStatus,
  handlePromise
}) => {
  const { tagLine, buttons } = BANNER_DATA
  const [email, setEmail] = useState(''); // Initialize email state
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePromise(email);
  };

  useEffect(() => {
    if (promiseStatus == "success") {
      resetFields();
    }
  }, [promiseStatus]);

  const resetFields = () => {
    setCount(count + 1);
    setEmail('');
  }

  return (
    <Box {...SectionWrapper}>
      <ParticlesComponent />
      <BannerSquareShape />
      <BannerCircleShape />
      <Container >
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...updateTitle} className="discountAmount" />
                  <Text {...updateText} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            {SHOW_FOR_RELEAE ?
              <form key={'contact-form' + count} onSubmit={handleSubmit}>
                <EmailWrapper>
                  <input
                    type='email'
                    id="emailInput"
                    placeholder='Enter Email address..'
                    className='input-email'
                    required
                    value={email}
                    disabled={promiseStatus === 'pending'}
                    onChange={(e) => setEmail(e.target.value)} // Update email state on change
                  />
                  <button className='input-button'
                    disabled={promiseStatus === 'pending'}
                    type="submit"
                  >
                    {promiseStatus === 'pending' ? (
                      <div className="lds-dual-ring">
                      </div>
                    ) : (
                      <img src={arrowIcon?.src} alt='banner button' />
                    )}
                  </button>
                </EmailWrapper>
              </form> : <ButtonWrapper>
                <Link href="/preregister">
                  <a>
                    <Button title="Pre-Register Now" {...button} {...btnStyle} />
                  </a>
                </Link>
              </ButtonWrapper>
            }
            {SHOW_FOR_RELEAE && <>
              <Text as='p' className='tagLine' content={tagLine} />
              <DownloadButtonWrapper>
                {buttons.map((button, index) => (
                  <Link href={button.link} key={`banner-button-${index}`} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <section className='download-button'>
                        <img
                          src={button?.icon?.src}
                          width='30'
                          height='30'
                          alt={button?.title}
                          className='download-button-icon'
                        />
                        <Box className='download-button-content'>
                          <Text
                            as='span'
                            content={button?.text}
                            className='download-button-content-text'
                          />
                          <Text
                            as='p'
                            content={button?.title}
                            className='download-button-content-title'
                          />
                        </Box>
                      </section>
                    </a>
                  </Link>
                ))}
              </DownloadButtonWrapper>
            </>}
          </Box>
          <Box {...col} {...imageArea}>
            <NextImage src={AppScreenshot} alt="Domain Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  updateTitle: PropTypes.object,
  updateText: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: ['0px', '40px', '40px', '40px', '0px'],
    pb: '40px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-40px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '40%'],
    pt: '40px',
    ml: 'auto',
  },
  title: {
    content: BANNER_DATA.slogan,
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  description: {
    content: BANNER_DATA.title,
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    width: ['100%', '100%', '100%', '80%', '80%'],
    mb: '10px',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  updateTitle: {
    content: BANNER_DATA.updateTitle,
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  updateText: {
    content: BANNER_DATA.updateText,
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
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


const DomainSectionWithSubscription = withPromiseHandler(DomainSection, {
  promise: subscribeToNewsletter,
});

export default DomainSectionWithSubscription;
