import { Avatar, Dropdown, Menu, PageHeader } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React from "react";
import avatar from "assets/images/img_avatar.png";

const PunchCardHeader: React.FC = () => {
  // Dropdown Menu Items
  const menuItems: ItemType[] = [
    { label: "Apply For Leave", key: "1" },
    { label: "View Previous Record", key: "2" },
    { label: "View All Records", key: "3" },
    {
      type: "divider",
    },
    { label: "Log Out", key: "4" },
  ];

  return (
    <PageHeader
      title="EMPLOYEE PUNCH CARD"
      extra={
        <Dropdown
          overlay={<Menu items={menuItems} />}
          placement="bottomRight"
          arrow
        >
          <Avatar size={40} src={avatar} style={{ cursor: "pointer" }} />
        </Dropdown>
      }
    ></PageHeader>
  );
};

export default PunchCardHeader;
