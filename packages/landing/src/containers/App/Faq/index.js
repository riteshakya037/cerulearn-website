import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit'
import { plusCircled } from 'react-icons-kit/ionicons/plusCircled'
import { minusCircled } from 'react-icons-kit/ionicons/minusCircled'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Container from 'common/components/UI/Container'
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion'
import FaqSection from './faq.style'
import Box from 'common/components/Box';

import { faq } from 'common/data/App/Faqs'

const Faq = ({ sectionSubTitle, sectionTitle, sectionHeader, faqTitle, faqDescription }) => {
  const { title, faqs } = faq
  return (
    <FaqSection id='faq'>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box>
          <Accordion>
            <Fragment>
              {faqs.map((item) => (
                <AccordionItem key={`accordion-key--${item.id}`}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading
                          content={item.question}
                          {...faqTitle}
                        />
                        <IconWrapper className='icon-wrapper'>
                          <OpenIcon>
                            <Icon icon={minusCircled} size={20} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plusCircled} size={20} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <Text content={item.answer} {...faqDescription} />
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
              ))}
            </Fragment>
          </Accordion>
        </Box>
      </Container>
    </FaqSection>
  )
}


// FeatureSlider style props
Faq.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
  faqTitle: PropTypes.object,
  faqDescription: PropTypes.object,
};

// FeatureSlider default style
Faq.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: faq.slogan,
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: faq.title,
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  faqTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  faqDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48',
  },
};


export default Faq
