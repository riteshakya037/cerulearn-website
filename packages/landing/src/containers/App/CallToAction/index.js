import React from 'react';

import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';

import illustration from 'common/assets/image/app/shapeLeft1.png';
import illustration2 from 'common/assets/image/app/shapeRight1.png';
import SectionWrapper, {
  Content,
  ButtonWrap,
  ContentWrap,
} from './callToAction.style';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <img src={illustration?.src} alt="shape" />
          <img src={illustration2?.src} alt="shape" />
          <ContentWrap>
            <Heading
              as="h3"
              content="We'd love to demonstrate what we can do for you"
            />
            <ButtonWrap>
              <Link href="/contact">
                <a>
                  <Button title="Request A Demo" />
                </a>
              </Link>
            </ButtonWrap>
          </ContentWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
