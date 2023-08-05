import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
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
  EmailWrapper,
} from './banner.style';
import { BANNER_DATA } from 'common/data/App/Banner'
import AppScreenshot from 'common/assets/image/app/mobile.png';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  image,
  imageArea,
  discountAmount,
  discountText,
}) => {
  const { sectionImage, screenImage, tagLine, buttons } =
    BANNER_DATA
  return (
    <Box {...SectionWrapper}>
      <ParticlesComponent />
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...discountAmount} className="discountAmount" />
                  <Text {...discountText} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <EmailWrapper>
              <input
                type='text'
                placeholder='Enter Email address..'
                className='input-email'
              />
              <button className='input-button'>
                <img src={arrowIcon?.src} alt='banner button' />
              </button>
            </EmailWrapper>
            <Text as='p' className='tagLine' content={tagLine} />
            <DownloadButtonWrapper>
              {buttons.map((button, index) => (
                <Link href='/' key={`banner-button-${index}`}>
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
                </Link>
              ))}
            </DownloadButtonWrapper>
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
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '40px',
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
    mb: '10px',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: BANNER_DATA.update,
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
