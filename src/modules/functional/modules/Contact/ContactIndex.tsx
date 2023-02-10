import React from 'react';

import PageContainer from '../../../layout/modules/PageContainer';
import VirusPopup from './VirusPopup';

export default function Todo() {
  return <PageContainer>
    <h1>Contact Us</h1>

    <p>Need help? We might be able to, or maybe not. Call us and let's see.</p>

    <h2>604-NOT-SCAM</h2>

    <VirusPopup />
  </PageContainer>;
}
