import { Component } from 'react';
import getConfig from 'next/config';

import PageWrapper from '~/components/common/PageWrapper';

const { publicRuntimeConfig: { staticFolder } } = getConfig();

export default class extends Component {
  public render() {
    return (
      <PageWrapper>
        <>
          <img src={`${staticFolder}/images/2.png`} />
          <div>Welcome to Next.js!</div>
        </>
      </PageWrapper>
    );
  }
}
