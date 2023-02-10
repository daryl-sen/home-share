import React from 'react';

import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

import PageContainer from '../../../layout/modules/PageContainer';
import AccountsDropdown from './AccountsDropdown';

export default function Todo() {
  return <PageContainer>
    <div style={{ maxWidth: '800px' }}>
      <h1>Transfers</h1>
      <p>Give a man a dollar, he will not be able to buy anything because of inflation. Teach a man how to make a dollar, he will say "I can't buy anything with a dollar".</p>

      <Paper>
        <h2>Transfer funds from</h2>
        <AccountsDropdown />

        <h3>Transfer funds to</h3>
        <AccountsDropdown />

        <Button variant="contained" sx={{ mt: 4 }}>Transfer</Button>
      </Paper>
    </div>

  </PageContainer>;
}
