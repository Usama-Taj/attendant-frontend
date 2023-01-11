import React from 'react';
import 'styles/style.css';
import 'antd/dist/antd.css';
import { HashRouter as Router } from 'react-router-dom';
import MainLayout from 'layouts/EmployeeLayout/EmployeeLayout';
import EmployeeRoutes from 'routes/EmployeeRoutes/EmployeeRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <EmployeeRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
