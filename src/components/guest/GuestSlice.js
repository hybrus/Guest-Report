import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const guestListSlice = createSlice({
    name: 'guestList',
    initialState: {
        guests: [],
    },
    reducers: {
        addState: (state, { payload }) => {
            state.guests = [...state.guests, payload];
        },
        outState: (state, { payload }) => {

            let id = payload.toUpperCase()

            state.guests = state.guests.map(obj => {
                if (obj.id === id)
                    return {
                        ...obj,
                        visit_status: 'out',
                        time_out: dayjs().format('MM/DD/YYYY hh:mm A')
                    }
                else
                    return obj
            });

            state.loggedout = true
        },
    },
});

export const { addState, outState } = guestListSlice.actions;

export const guestListSelector = (state) => state.guests;
