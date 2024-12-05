const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
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

export default accountReducer;
export { deposit, withdraw, requestLoan, payLoan, reset };
