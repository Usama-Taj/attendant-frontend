import styled from "styled-components";
import { Card } from "antd";

export const LoginCard = styled(Card)`
  .ant-card-head-title {
    font-size: 2rem;
    text-align: center;
  }
  width: 20vw;
`;

export const LoginForm = styled.form`
  display: grid;
  row-gap: 2rem;
`;
