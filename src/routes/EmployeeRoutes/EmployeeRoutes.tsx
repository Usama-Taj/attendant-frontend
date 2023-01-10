import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login/Login";
import PinConfirmation from "pages/PinConfirmation/PinConfirmation";
import PunchCard from "pages/PunchCard/PunchCard";

const EmployeeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pin-confirmation" element={<PinConfirmation />} />
      <Route path="/" element={<PunchCard />} />
    </Routes>
  );
};

export default EmployeeRoutes;
