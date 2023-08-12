import React from 'react';
import MainContainer from 'containers/App/MainContainer';
import { POLICY } from 'common/data/App/Policy'
import MarkdownBody from 'containers/App/MarkdownBody';

const Privacy = () => {
  return (
    <MainContainer>
      <MarkdownBody data={POLICY.data} title={POLICY.title} />
    </MainContainer>
  );
};

export default Privacy;
