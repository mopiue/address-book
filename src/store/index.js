import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { contactsSlice } from '../features/contacts/contactsSlice'

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
