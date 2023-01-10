import React, { useCallback, useState } from "react";
import PunchCardDescription from "components/PunchCardDescription/PunchCardDescription";
import { Center } from "shared-styles/Grid.styles";
import { PunchButton, StyledPunchCard } from "./PunchCard.styles";
import PunchCardHeader from "components/PunchCardHeader/PunchCardHeader";
import { PUNCH_IN, PUNCH_OUT } from "constant";

const PunchCard: React.FC = () => {
  const [punched, setPunched] = useState<boolean>(false);

  const onPunch = useCallback(() => {
    setPunched(!punched);
  }, [punched]);
  return (
    <Center>
      <StyledPunchCard
        title={<PunchCardHeader />}
        actions={[
          <PunchButton
            key={"punch"}
            type="primary"
            block
            onClick={onPunch}
            punched={punched}
          >
            {punched ? PUNCH_OUT : PUNCH_IN}
          </PunchButton>,
        ]}
      >
        <PunchCardDescription />
      </StyledPunchCard>
    </Center>
  );
};

export default PunchCard;
