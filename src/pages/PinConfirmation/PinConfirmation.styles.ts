import styled from "styled-components";
import { Card } from "antd";

export const PinConfirmationCard = styled(Card)`
  .ant-card-head-title {
    font-size: 2rem;
    text-align: center;
  }
  width: 25vw;
`;

export const PinConfirmationForm = styled.form`
  display: grid;
  row-gap: 2rem;
`;
