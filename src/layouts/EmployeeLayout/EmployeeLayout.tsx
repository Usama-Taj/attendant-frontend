import { Layout } from "antd";
import React, { ReactNode } from "react";
import { StyledEmployeeLayoutComponent } from "./EmployeeLayout.styles";

interface EmployeeLayoutProps {
  children: ReactNode | ReactNode[];
}

const EmployeeLayout: React.FC<EmployeeLayoutProps> = ({ children }) => {
  const { Content } = Layout;
  return (
    <StyledEmployeeLayoutComponent>
      <Content>{children}</Content>
    </StyledEmployeeLayoutComponent>
  );
};

export default EmployeeLayout;
