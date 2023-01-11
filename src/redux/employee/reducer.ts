import { IEmployee } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployeeState } from "types";

const initialState: IEmployeeState = {
  employee_loading: false,
  employees_loading: false,
  employees: [],
};

export default createSlice({
  name: "employee",
  initialState,
  reducers: {
    getEmployee: (state, action: PayloadAction<IEmployee>) => {
      state.employee = action.payload;
    },
    getEmployees: (state, action: PayloadAction<IEmployee[]>) => {
      state.employees = action.payload;
    },
    setEmployeesLoading: (state, action: PayloadAction<boolean>) => {
      state.employees_loading = action.payload;
    },
    setEmployeeLoading: (state, action: PayloadAction<boolean>) => {
      state.employee_loading = action.payload;
    },
  },
});
