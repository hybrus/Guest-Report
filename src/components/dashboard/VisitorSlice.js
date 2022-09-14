import { createSlice } from '@reduxjs/toolkit';

export const visitorListSlice = createSlice({
    name: 'visitorList',
    initialState: {
        visitors: [],
    },
    reducers: {
        addState: (state, { payload }) => {
            state.visitors = [...state.visitors, payload];
        },
        outState: (state, { payload }) => {

            let id = payload.toUpperCase()

            state.visitors = state.visitors.map(obj => {
                if (obj.id === id)
                    return { ...obj, visit_status: 'out' }
                else
                    return obj
            });

            state.loggedout = true
        },
    },
});

export const { addState, outState } = visitorListSlice.actions;

export const visitorListSelector = (state) => state.visitors;
