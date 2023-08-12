import React from 'react';
import MainContainer from 'containers/App/MainContainer';
import { TERMS } from 'common/data/App/Terms'
import MarkdownBody from 'containers/App/MarkdownBody';

const Terms = () => {
  return (
    <MainContainer>
      <MarkdownBody data={TERMS.data} title={TERMS.title} />
    </MainContainer>
  );
};

export default Terms;
