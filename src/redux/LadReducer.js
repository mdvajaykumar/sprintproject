const initState = {
  list: [],

  refemp: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

const EMPLOYEE_GET_ALL = "EMPLOYEE_GET_ALL";
const EMPLOYEE_GET_BY_ID = "EMPLOYEE_GET_BY_ID";

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

export function getByIdEmployeeAction(payload) {
  return { type: EMPLOYEE_GET_BY_ID, payload: payload };
}

// REDUCER LOGIC
export function LadReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ALL:
      // TODO
      return { ...state, list: action.payload };
    case EMPLOYEE_GET_BY_ID:
      // TODO
      return state;

    default:
      return state;
  }
}
