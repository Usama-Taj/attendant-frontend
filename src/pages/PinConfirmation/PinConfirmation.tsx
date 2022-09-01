import React from "react";
import { Center } from "shared-styles/Grid.styles";
import { Input, Button } from "antd";
import {
  PinConfirmationCard,
  PinConfirmationForm,
} from "./PinConfirmation.styles";
import { useNavigate } from "react-router-dom";

const PinConfirmation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <PinConfirmationCard title="PINCODE CONFIRMATION">
        <PinConfirmationForm
          onSubmit={(e) => {
            console.log(e);
            navigate("/");
            e.preventDefault();
          }}
        >
          <Input.Password placeholder="PIN Code" />
          <Input.Password placeholder="Confirm PIN Code" />
          <Button htmlType="submit" type="primary">
            Confirm
          </Button>
        </PinConfirmationForm>
      </PinConfirmationCard>
    </Center>
  );
};

export default PinConfirmation;
