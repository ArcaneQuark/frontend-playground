import SamplePage from 'pages/SampleApp/SamplePage';
import StatementPage from 'pages/SampleApp/StatementPage';
import MechsPage from 'pages/SampleApp/MechsPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


export default function Router() {
  return (
    <Routes>
      <Route
        path='/sample'
        element={<SamplePage />}
        exact
      />
      <Route path='/' element={<Navigate to='/sample' replace />} />
      <Route path='*' element={<Navigate to='/404' replace />} />
      <Route path='/statement' element={<StatementPage />} exact />
      <Route path='/mechs' element={<MechsPage />} exact />
    </Routes>
  );
}
