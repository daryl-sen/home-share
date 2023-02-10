import React from 'react';

import PageContainer from '../../../layout/modules/PageContainer';

export default function Dashboard() {
  return <PageContainer>
    <h1>Welcome to LegitBank Canada</h1>
    <p>We are the most legit bank<sup>1</sup> in all of Canada, maybe North America.</p>
    <p>Please log in with your real bank credentials from any bank, this is not a scam<sup>2</sup>.</p>

    <img src="https://d2tyltutevw8th.cloudfront.net/media/image/open-banking-1200-1662083126.jpg" alt="" />
    <p>
      <sup>1</sup> Not a real bank. <br />
      <sup>2</sup> This is definitely a scam
    </p>

  </PageContainer>;
}
