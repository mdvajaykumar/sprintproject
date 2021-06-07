const initState = {
  list: [],

  refemp: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

const EMPLOYEE_GET_ALL = "EMPLOYEE_GET_ALL";
const EMPLOYEE_GET_BY_ID = "EMPLOYEE_GET_BY_ID";
const CUSTOMER_GET_ALL = "CUSTOMER_GET_ALL";
const REF_EMPLOYEE = "REF_EMPLOYEE";

export function getAllEmployeeAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080//api/lad/allrecords";

    const response = await fetch(url);
    const employeList = await response.json();
    console.log(employeList);

    dispatch({ type: EMPLOYEE_GET_ALL, payload: employeList });
  };
}

export function getAllCustomerAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url =
      "http://localhost:8080//api/customerloanrequest/allcustomerrecords";

    const response = await fetch(url);
    const employeList = await response.json();
    console.log(employeList);

    dispatch({ type: CUSTOMER_GET_ALL, payload: employeList });
  };
}

export function getByIdEmployeeAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/lad/${payload.id}`;
    const response = await fetch(url);
    const employeeObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefEmployee(employeeObj));
  };
}

export function updateRefEmployee(payload) {
  return { type: REF_EMPLOYEE, payload: payload };
}

// REDUCER LOGIC
export function LadReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ALL:
      // TODO
      return { ...state, list: action.payload };

    case CUSTOMER_GET_ALL:
      // TODO
      return { ...state, list: action.payload };
    case EMPLOYEE_GET_BY_ID:
      // TODO
      return state;
    case REF_EMPLOYEE:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
