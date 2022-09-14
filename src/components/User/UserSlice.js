import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    let formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)
    try {
      const response = await fetch(
        'https://api-dev.momenttrack.com/auth/default/system/login',
        {
          method: 'POST',
          body: formData,
        }
      );

      let data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('token', data.data.access_token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  'users/fetchUserByToken',
  async ({ }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://api-dev.momenttrack.com/api/lexcorp/users/me',
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
        return { ...data.data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const destroyUser = createAsyncThunk(
  'users/logout',
  async ({ }, thunkAPI) => {
    localStorage.removeItem('token');
    return {}
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    first_name: '',
    email: '',
    guestList: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [destroyUser.fulfilled]: (state, { payload }) => {
      state.email = "";
      state.first_name = "";
      state.isFetching = false;
      state.isSuccess = false;
      return state;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.first_name = payload.first_name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.email = payload.email;
      state.first_name = payload.first_name;
    },
    [fetchUserBytoken.rejected]: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
