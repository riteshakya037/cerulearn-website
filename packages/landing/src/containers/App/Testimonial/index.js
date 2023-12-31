import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from 'common/data/App/TestimonialSlider';
import SliderDes from '../sliderDescription';
import Image1 from 'common/assets/image/app/test-student.jpeg';
import Image2 from 'common/assets/image/app/test-teacher.png';
import Image3 from 'common/assets/image/app/test-parent.jpeg';
import Image4 from 'common/assets/image/app/test-institution.png';
import Image5 from 'common/assets/image/app/test-professional.jpg';

const images = [
  {
    thumbnail: `${Image1?.src}`,
    thumbnailAlt: 'thumb one',
    description: <SliderDes data={data.testimonials[0]} />,
  },
  {
    thumbnail: `${Image2?.src}`,
    thumbnailAlt: 'thumb two',
    description: <SliderDes data={data.testimonials[1]} />,
  },
  {
    thumbnail: `${Image3?.src}`,
    thumbnailAlt: 'thumb three',
    description: <SliderDes data={data.testimonials[2]} />,
  },
  {
    thumbnail: `${Image5?.src}`,
    thumbnailAlt: 'thumb five',
    description: <SliderDes data={data.testimonials[4]} />,
  },
  {
    thumbnail: `${Image4?.src}`,
    thumbnailAlt: 'thumb four',
    description: <SliderDes data={data.testimonials[3]} />,
  },
];

const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle }) => {
  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
        <Box className="testimonialDesWrapper">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        </Box>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    content: 'CLIENT TESTIMONIAL',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
