import { configureStore } from '@reduxjs/toolkit';
import { employeeListSlice } from '../components/dashboard/EmployeeSlice';
import { visitorListSlice } from '../components/dashboard/VisitorSlice';
import { userSlice } from '../components/User/UserSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    employees: employeeListSlice.reducer,
    visitors: visitorListSlice.reducer,
  },
});
