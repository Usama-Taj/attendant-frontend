export interface IEmployee {
  id: string;
  pin_code: string;
  username: string;
  firs_login?: boolean;
  email: string;
  gender: string;
  department: string;
  designation: string;
  experience: number;
  daily_record: IEmployeeDailyRecord[];
}

export interface ILeaveRecord {
  id: string;
  employee_id: string;
  title: string;
  description: string;
  from: string;
  to: string;
}

export interface IEmployeeDailyRecord {
  id: string | number;
  date: string;
  punch_in: boolean;
  punch_in_time: string;
  leave?: ILeaveRecord;
}

export interface IEmployeeState {
  employees_loading: boolean;
  employees: IEmployee[];
  employee_loading: boolean;
  employee?: IEmployee;
}

export interface IEmployeeLeaveFormFields {
  title: string;
  description: string;
  period: string;
}
