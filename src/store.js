import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// todo Store
const rootRecuder = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootRecuder);
export default store;
