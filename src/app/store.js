import { configureStore } from '@reduxjs/toolkit';
import { employeeListSlice } from '../components/guest/EmployeeSlice';
import { guestListSlice } from '../components/guest/GuestSlice';
import { userSlice } from '../components/user/UserSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    employees: employeeListSlice.reducer,
    guests: guestListSlice.reducer,
  },
});
