import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};

// todo accountReducer
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
      };

    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    case 'account/reset':
      return {
        ...initialStateAccount,
      };

    default:
      return state;
  }
}

// todo customerReducer
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

//todo Account Actions
function deposit(value) {
  return { type: 'account/deposit', payload: value };
}
function withdraw(value) {
  return { type: 'account/withdraw', payload: value };
}
function requestLoan(loan, loanPurpose) {
  return { type: 'account/requestLoan', payload: { loan, loanPurpose } };
}
function payLoan() {
  return { type: 'account/payLoan' };
}

function reset() {
  return { type: 'account/reset' };
}

//todo Customer Action
function createCustomer(fullName, nationalId) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalId, createdAt: new Date() },
  };
}
function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}

// todo Store
const rootRecuder = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootRecuder);

/* Account */
store.dispatch(deposit(1200));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, 'By Car'));
store.dispatch(payLoan());
console.log(store.getState());

/* Customer */
store.dispatch(createCustomer('John Doe', '123456789'));
console.log(store.getState());
store.dispatch(updateName('John Ho'));
console.log(store.getState());
