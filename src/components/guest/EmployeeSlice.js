import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getEmployeeLists = createAsyncThunk(
    'employeeLists/employee',
    async ({ }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://api-dev.momenttrack.com/api/lexcorp/users',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                    },
                }
            );
            let data = await response.json();

            if (response.status === 200) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        employees:[]
    },
    reducers: {
        clearState: (state) => {
            return state;
        },
    },
    extraReducers: {
        [getEmployeeLists.pending]: (state) => {
        },
        [getEmployeeLists.fulfilled]: (state, { payload }) => {
            state.employees = payload.data;
        },
        [getEmployeeLists.rejected]: (state) => {
        },
    },
});

export const { clearState } = employeeListSlice.actions;

export const employeeListSelector = (state) => state.employees;
