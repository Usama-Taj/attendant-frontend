import styled from "styled-components";
import { Card } from "antd";

export const StyledPunchCard = styled(Card)`
  .ant-card-head-title {
    font-size: 2rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .ant-card-head {
    margin: 0;
    padding: 0;
  }
  .ant-card-actions {
    justify-content: center;
    & li {
      width: 90% !important;
    }
  }
  width: 30vw;
`;
