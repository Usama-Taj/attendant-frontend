import React from "react";
import { Descriptions } from "antd";
import { CustomDescription } from "./PunchCardDescription.styles";

const PunchCardDescription: React.FC = () => {
  const { Item } = Descriptions;
  return (
    <CustomDescription
      layout="horizontal"
      title="Employee Info"
      size="default"
      column={1}
    >
      <Item label="Name">Some Name</Item>
      <Item label="Department">ABC Department</Item>
      <Item label="Designation">Project Manager</Item>
      <Item label="Address">H# 44, St# 3, F-8/2, Islamabad</Item>
      <Item label="Experience">2 Years</Item>
    </CustomDescription>
  );
};

export default PunchCardDescription;
