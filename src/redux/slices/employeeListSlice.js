import { createSlice } from "@reduxjs/toolkit";

export const employeeListSlice = createSlice({
    name: "employeeList",
    initialState: {
        employees: []
    },
    reducers: {
        addEmployee: (state, { payload }) => {
            state.employees.push(payload)
        },
    }
})

export const { addEmployee } = employeeListSlice.actions
export default employeeListSlice.reducer