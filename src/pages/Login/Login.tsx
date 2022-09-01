import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Center } from "shared-styles/Grid.styles";
import { Input, Button } from "antd";
import { LoginCard, LoginForm } from "./Login.styles";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <LoginCard title="ATTENDANT LOGIN">
        <LoginForm
          onSubmit={(e) => {
            console.log(e);
            navigate("/pin-confirmation", { replace: true });
            e.preventDefault();
          }}
        >
          <Input placeholder="Enter username" suffix={<UserOutlined />} />
          <Input.Password placeholder="Enter PIN Code" />
          <Button htmlType="submit" type="primary">
            LOGIN
          </Button>
        </LoginForm>
      </LoginCard>
    </Center>
  );
};

export default Login;
