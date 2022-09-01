import React from "react";
import PunchCardDescription from "components/PunchCardDescription/PunchCardDescription";
import { Center } from "shared-styles/Grid.styles";
import { StyledPunchCard } from "./PunchCard.styles";
import PunchCardHeader from "components/PunchCardHeader/PunchCardHeader";
import { Button } from "antd";

const PunchCard: React.FC = () => {
  return (
    <Center>
      <StyledPunchCard
        title={<PunchCardHeader />}
        actions={[
          <Button key={"punch"} block type="primary">
            Punch In
          </Button>,
        ]}
      >
        <PunchCardDescription />
      </StyledPunchCard>
    </Center>
  );
};

export default PunchCard;
