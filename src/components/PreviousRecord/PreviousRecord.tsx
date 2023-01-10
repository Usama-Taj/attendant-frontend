import { Button, Modal, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { getEmployeeRecord } from "api/employee.api";
import { AxiosResponse } from "axios";
import { CLOSE, PREVIOUS_RECORD } from "constant";
import React, { useEffect } from "react";
import useSWR from "swr";
import {
  IEmployee,
  IEmployeeDailyRecord,
  ILeaveRecord,
} from "types/employee.types";

interface PreviousRecordProps {
  show: boolean;
  hidePreviousRecord: () => void;
  employee: IEmployee;
}

const PreviousRecord: React.FC<PreviousRecordProps> = ({
  show,
  hidePreviousRecord,
  employee,
}) => {
  const { data, isLoading, isValidating } = useSWR<AxiosResponse<IEmployee>>(
    employee.id,
    getEmployeeRecord
  );
  const daily_record = data?.data
    ? data.data.daily_record.map((item) => ({ ...item, key: item.id }))
    : [];
  const columns: ColumnsType<IEmployeeDailyRecord> = [
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Punch In Time",
      dataIndex: "punch_in_time",
      key: "punch_in_time",
    },
    {
      title: "Leave",
      dataIndex: "leave",
      key: "leave",
      render: (value: ILeaveRecord) => (value ? "Yes" : "No"),
    },
  ];
  return (
    <Modal
      width="80%"
      visible={show}
      onCancel={hidePreviousRecord}
      title={PREVIOUS_RECORD}
      footer={[
        <Button key={CLOSE} type="primary" onClick={hidePreviousRecord}>
          {CLOSE}
        </Button>,
      ]}
    >
      <Table
        columns={columns}
        dataSource={data?.data && data.data?.daily_record}
      />
    </Modal>
  );
};

export default PreviousRecord;
