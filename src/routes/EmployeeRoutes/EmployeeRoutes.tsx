import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import PinConfirmation from 'pages/PinConfirmation/PinConfirmation';
import PunchCard from 'pages/PunchCard/PunchCard';

const EmployeeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
      <Route
        path={`${process.env.PUBLIC_URL}/pin-confirmation`}
        element={<PinConfirmation />}
      />
      <Route path={process.env.PUBLIC_URL} element={<PunchCard />} />
    </Routes>
  );
};

export default EmployeeRoutes;
