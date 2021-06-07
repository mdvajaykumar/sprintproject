import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getAllEmployeeAction,
  getAllLoanStatusAction,
} from "../redux/LadReducer";

export function Ladlist() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllLoanStatusAction());
  }, []);

  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-secondary">Customer Loan List</h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#LOAN ID</th>
              <th scope="col">LOAN TYPE</th>
              <th scope="col">EMI</th>
              <th scope="col">LOAN AMOUNT</th>
              <th scope="col">CUSTOMER ID</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {[...state.lad.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.statusid}</th>
                <td>{item.customerloantype}</td>
                <td>{item.emi}</td>
                <td>{item.loanamount}</td>
                <td>{item.customerrefid}</td>
                <td>
                  <input
                    type="button"
                    //onClick={() => getEmployeeById(item)}
                    value="Detail"
                    className="btn btn-link"
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
