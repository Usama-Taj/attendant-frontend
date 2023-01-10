import api from "api";

const getAllEmployees = async () => {
  return await api.get(`/employee`);
};

const getEmployeeById = async (id: string) => {
  return await api.get(`/employee/${id}`);
};

const getEmployeeRecord = async (id: string) => {
  return await api.get(`/employee/${id}`);
};

const setEmployeeFirstLogin = async (username: string) => {
  return await api.patch(`/employee?username=${username}`, {
    first_login: true,
  });
};

export {
  setEmployeeFirstLogin,
  getAllEmployees,
  getEmployeeById,
  getEmployeeRecord,
};
