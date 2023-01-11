import styled from "styled-components";
import { Button, ButtonProps, Card } from "antd";

interface PunchButtonProps extends ButtonProps {
  punched: boolean;
}

const punchColor = ({ punched }: PunchButtonProps) => {
  return punched ? "#6DBC7F" : "";
};

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
    justify-content: end;
    & > li {
      margin-left: 10px;
      margin-right: 10px;
      width: 20% !important;
    }
  }
`;

export const PunchButton = styled(Button)<PunchButtonProps>`
  &.ant-btn {
    background-color: ${punchColor};
    border-color: ${punchColor};
  }
`;
