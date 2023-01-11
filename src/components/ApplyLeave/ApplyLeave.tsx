import { Button, DatePicker, Form, Input, Modal } from "antd";
import {
  APPLY,
  CANCEL,
  APPLY_FOR_LEAVE,
  LEAVE_TITLE,
  LEAVE_DESCRIPTION,
} from "constant";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyForLeaveSchema } from "./validation";
import { IEmployeeLeaveFormFields } from "types";
import { getLeavePayload } from "utils/helper";

const { TextArea } = Input;
const { Item } = Form;

interface ApplyLeaveProps {
  show: boolean;
  hideLeaveModal: () => void;
}

const { RangePicker } = DatePicker;
const ApplyLeave: React.FC<ApplyLeaveProps> = ({ show, hideLeaveModal }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEmployeeLeaveFormFields>({
    resolver: yupResolver(applyForLeaveSchema),
  });

  // useCallbacks
  // onSubmit
  const onSubmit = async (values: IEmployeeLeaveFormFields) => {
    const payload = getLeavePayload(values);
    console.log("Employee Leave Payload", payload);
  };
  return (
    <Modal
      visible={show}
      onCancel={hideLeaveModal}
      title={APPLY_FOR_LEAVE}
      footer={[
        <Button key={CANCEL} type="default" onClick={hideLeaveModal}>
          {CANCEL}
        </Button>,
        <Button
          key={APPLY}
          type="primary"
          htmlType="submit"
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
        >
          {APPLY}
        </Button>,
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Item
          labelCol={{ span: 24 }}
          label="Title"
          validateStatus={errors?.title && "error"}
          help={errors?.title && errors?.title?.message}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={LEAVE_TITLE} />
            )}
          />
        </Item>
        <Item
          labelCol={{ span: 24 }}
          label="Description"
          validateStatus={errors?.description && "error"}
          help={errors?.description && errors?.description?.message}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea {...field} placeholder={LEAVE_DESCRIPTION} />
            )}
          />
        </Item>
        <Item
          label="Leave Period"
          labelCol={{ span: 24 }}
          validateStatus={errors?.period && "error"}
          help={errors?.period && errors?.period?.message}
        >
          <Controller
            name="period"
            control={control}
            render={({ field }) => (
              <RangePicker
                format="DD-MMM-YYYY"
                style={{ width: "100%" }}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
          />
        </Item>
      </form>
    </Modal>
  );
};

export default ApplyLeave;
