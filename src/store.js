import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import counterReducer from "./features/accounts/counterSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    counter: counterReducer
  },
});

export default store;
