import { createReducer } from '@reduxjs/toolkit'
import * as actions from "./actions";

export const contactFilter = createReducer ('', {
   [actions.filterValue]: ( _, {payload}) => payload
})
