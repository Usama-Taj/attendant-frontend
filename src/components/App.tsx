import React from 'react';
import 'styles/style.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from 'layouts/EmployeeLayout/EmployeeLayout';
import EmployeeRoutes from 'routes/EmployeeRoutes/EmployeeRoutes';
console.log(process.env.PUBLIC_URL);
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
