import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Accounts from './modules/functional/modules/Accounts/AccountsIndex';
import Contact from './modules/functional/modules/Contact/ContactIndex';
import Dashboard from './modules/functional/modules/Dashboard/DashboardIndex';
import Transfers from './modules/functional/modules/Transfers/TransfersIndex';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transfers" element={<Transfers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
