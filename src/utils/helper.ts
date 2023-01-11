import { IEmployeeLeaveFormFields } from "types";
import { v4 as uuidv4 } from "uuid";

export const getLeavePayload = ({
  title,
  description,
  period,
}: IEmployeeLeaveFormFields) => {
  return {
    id: uuidv4(),
    employee_id: "id of loggedin employee",
    title,
    description,
    from: period[0],
    to: period[1],
  };
};
