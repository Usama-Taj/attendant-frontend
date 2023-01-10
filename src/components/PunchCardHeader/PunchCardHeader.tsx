import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  MenuProps,
  Modal,
  PageHeader,
} from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import avatar from "assets/images/img_avatar.png";
import {
  ALL_RECORDS,
  APPLY,
  APPLY_FOR_LEAVE,
  CANCEL,
  CLOSE,
  PREVIOUS_RECORD,
} from "constant";
import ApplyLeave from "components/ApplyLeave/ApplyLeave";
import PreviousRecord from "components/PreviousRecord/PreviousRecord";
import { IEmployee } from "types/employee.types";

const menuItems: ItemType[] = [
  { label: "Apply For Leave", key: "1" },
  { label: "View Previous Record", key: "2" },
  { type: "divider" },
  { label: "Log Out", key: "4" },
];
const EMPLOYEE: IEmployee = {
  id: "1UyETELgLKbWgcWodl",
  pin_code: "cn96PCD02LkXUjQdP",
  username: "Jehanna",
  email: "jpopplestone0@slashdot.org",
  gender: "F",
  department: "Human Resources",
  designation: "Construction Worker",
  experience: 7,
  daily_record: [
    {
      id: 1,
      date: "2022-02-13",
      punch_in: true,
      punch_in_time: "1:56:58 PM",
      leave: {
        id: "bjyWd0P96",
        employee_id: "1UyETELgLKbWgcWodl",
        title: "HglBx",
        description:
          "tower directly gradually weak cup about ten wire engine sick movie scientist mistake trail who sign new plain magic smell expression laugh discuss contain",
        from: "2021-10-15",
        to: "2022-13-11",
      },
    },
    {
      id: 2,
      date: "2021-10-10",
      punch_in: false,
      punch_in_time: "2:34:00 PM",
    },
    {
      id: 3,
      date: "2022-02-19",
      punch_in: false,
      punch_in_time: "11:39:01 AM",
      leave: {
        id: "bjyWd0P96",
        employee_id: "1UyETELgLKbWgcWodl",
        title: "HglBx",
        description:
          "tower directly gradually weak cup about ten wire engine sick movie scientist mistake trail who sign new plain magic smell expression laugh discuss contain",
        from: "2021-10-15",
        to: "2022-13-11",
      },
    },
    {
      id: 4,
      date: "2022-02-23",
      punch_in: false,
      punch_in_time: "11:32:59 AM",
    },
    {
      id: 5,
      date: "2022-06-16",
      punch_in: true,
      punch_in_time: "1:40:45 PM",
      leave: {
        id: "bjyWd0P96",
        employee_id: "1UyETELgLKbWgcWodl",
        title: "HglBx",
        description:
          "tower directly gradually weak cup about ten wire engine sick movie scientist mistake trail who sign new plain magic smell expression laugh discuss contain",
        from: "2021-10-15",
        to: "2022-13-11",
      },
    },
  ],
};

const PunchCardHeader: React.FC = () => {
  const [leaveModalVisible, setLeaveModalVisible] = useState(false);
  const [previousRecordVisible, setPreviousRecordVisible] = useState(false);
  const [allRecordsVisible, setAllRecordsVisible] = useState(false);
  // useCallbacks
  const hideLeaveModal = useCallback(() => {
    setLeaveModalVisible(false);
  }, []);

  const hidePreviousRecord = useCallback(() => {
    setPreviousRecordVisible(false);
  }, []);

  const onMenuItemClick: MenuProps["onClick"] = useCallback(({ key }) => {
    switch (key) {
      case "1":
        setLeaveModalVisible(true);
        break;
      case "2":
        setPreviousRecordVisible(true);
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <PageHeader
        title="EMPLOYEE PUNCH CARD"
        extra={
          <Dropdown
            overlay={<Menu items={menuItems} onClick={onMenuItemClick} />}
            placement="bottomRight"
            arrow
          >
            <Avatar size={40} src={avatar} style={{ cursor: "pointer" }} />
          </Dropdown>
        }
      ></PageHeader>
      <ApplyLeave show={leaveModalVisible} hideLeaveModal={hideLeaveModal} />
      <PreviousRecord
        show={previousRecordVisible}
        hidePreviousRecord={hidePreviousRecord}
        employee={EMPLOYEE}
      />
    </>
  );
};

export default PunchCardHeader;
