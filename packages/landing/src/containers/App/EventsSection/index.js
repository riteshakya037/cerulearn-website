// FeatureSection.js

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import ListGrid from 'common/components/ListGrid';
import Container from 'common/components/UI/Container';
import EventService from '../../../services/event'; 
import { FeatureSectionWrapper } from './featureSection.style';
import Link from 'next/link';
import { height, width } from 'styled-system';

const FeatureSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  imageStyle,
}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await EventService.getEvents();
        setEvents(eventsData);
        console.log(eventsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);


  const renderEventComponent = (event) => (
    <Link href={event.url}>
        <a target="_blank" rel="noopener noreferrer">
            <img crossorigin="anonymous" src={event.image_url} style={imageStyle} alt={event.title} />
        </a>
    </Link>
  );

  if(!events.length) {
    return null;
  }

  return (
    <FeatureSectionWrapper id="services">
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <ListGrid
          data={events}
          component={renderEventComponent}
          postCount={events.length}
          totalPost={events.length} // Assuming all events are loaded initially
          loading={loading}
        />
      </Container>
    </FeatureSectionWrapper>
  );
};

FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  loadingText: PropTypes.string,
  imageStyle: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionHeader: {
    mb: ['30px', '30px', '30px', '56px'],
  },
  sectionSubTitle: {
    content: 'Explore upcoming events',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
    textAlign: ['center'],
  },
  sectionTitle: {
    content: 'Events',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    textAlign: ['center'],
  },
  imageStyle: {
    height: 300, 
    width: '100%',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }
};

export default FeatureSection;
