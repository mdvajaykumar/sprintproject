const initState = {
  list: [],

  refemp: {},
  error: false,

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

const LOANSTATUS_GET_ALL = "LOANSTATUS_GET_ALL";
const CUSTOMER_GET_BY_ID = "CUSTOMER_GET_BY_ID";
const CUSTOMER_GET_ALL = "CUSTOMER_GET_ALL";
const REF_CUSTOMER = "REF_CUSTOMER";
const LOAN_GET_ALL = "LOAN_GET_ALL";
const SERVER_ERROR = "SERVER_ERROR";

export function GetAllLoanStatusAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };

  return async (dispatch) => {
    try {
      const url = "http://localhost:8080/api/lad/allrecords";

      const response = await fetch(url);
      const loanStatusList = await response.json();
      console.log(loanStatusList);

      localStorage.setItem("loanStatusList", JSON.stringify(loanStatusList));
      dispatch({ type: LOANSTATUS_GET_ALL, payload: loanStatusList });
    } catch (error) {
      console.log(error);
      dispatch({ type: SERVER_ERROR, payload: true });

      const localLoanStringStatusList = localStorage.getItem("loanStatusList");
      const localLoanStatusList = JSON.parse(localLoanStringStatusList);
      dispatch({ type: LOANSTATUS_GET_ALL, payload: localLoanStatusList });
    }
  };
}

export function GetAllCustomerAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };
  return async (dispatch) => {
    try {
      const url =
        "http://localhost:8080/api/customerloanrequest/allcustomerrecords";

      const response = await fetch(url);
      const customerList = await response.json();
      console.log(customerList);

      localStorage.setItem("customerList", JSON.stringify(customerList));
      dispatch({ type: CUSTOMER_GET_ALL, payload: customerList });
    } catch (error) {
      console.log(error);
      dispatch({ type: SERVER_ERROR, payload: true });

      const localCustomerStringList = localStorage.getItem("customerList");
      const customerList = JSON.parse(localCustomerStringList);
      dispatch({ type: CUSTOMER_GET_ALL, payload: customerList });
    }
  };
}

export function GetByIdCustomerAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/lad/${payload.id}`;
    const response = await fetch(url);
    const employeeObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefCustomer(employeeObj));
  };
}

export function updateRefCustomer(payload) {
  return { type: REF_CUSTOMER, payload: payload };
}

// REDUCER LOGIC
export function LadReducer(state = initState, action) {
  switch (action.type) {
    case LOANSTATUS_GET_ALL:
      // TODO
      return { ...state, list: action.payload };

    case CUSTOMER_GET_ALL:
      // TODO
      return { ...state, list: action.payload };
    case CUSTOMER_GET_BY_ID:
      // TODO
      return state;
    case REF_CUSTOMER:
      return { ...state, refemp: action.payload };

    case LOAN_GET_ALL:
      // TODO
      return { ...state, list: action.payload };
    case SERVER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
