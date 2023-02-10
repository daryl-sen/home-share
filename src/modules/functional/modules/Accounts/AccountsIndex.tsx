import React from 'react';

import PageContainer from '../../../layout/modules/PageContainer';
import AccountsTable from './Table';

export default function Todo() {
  return <PageContainer>
    <div style={ {maxWidth: "1000px"} }>
      <h1>Accounts</h1>
      <p>You got that bling 😎</p>
      <AccountsTable />
    </div>
  </PageContainer>;
}
