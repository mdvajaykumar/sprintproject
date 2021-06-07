import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getAllCustomerAction,
  getByIdEmployeeAction,
  getByIdLoanStatusAction,
} from "../redux/LadReducer";
import { EmployeeModal } from "./EmployeeModal";

export function Lad() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllCustomerAction());
  }, []);

  const getEmployeeById = (item) => {
    dispatch(getByIdEmployeeAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);
  };

  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-secondary">
          Customer Loan Request Detailes
        </h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#CUSTOMER ID</th>
              <th scope="col">AGE</th>
              <th scope="col">ANNUAL INCOME</th>
              <th scope="col">LOAN TYPE</th>
              <th scope="col">NAME</th>
              <th scope="col">PAN NUMBER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {[...state.lad.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.age}</td>
                <td>{item.annualincome}</td>
                <td>{item.loantype}</td>
                <td>{item.name}</td>
                <td>{item.pannumber}</td>
                <td>
                  <input
                    type="button"
                    onClick={() => getEmployeeById(item)}
                    value="verify"
                    className="btn btn-primary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
