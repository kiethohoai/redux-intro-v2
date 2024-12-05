const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};

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

export default customerReducer;
export { createCustomer, updateName };
