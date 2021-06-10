import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GetAllLoanStatusAction } from "../redux/LadReducer";

export function CustomerProfile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(GetAllLoanStatusAction());
  }, []);

  return (
    <div className="row bg-success">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="text-center">Customer page </h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        {[...state.lad.list].map((item, index) => (
          <div className="m-2 customer-card">
            <Card border="primary" bg="primary" style={{ width: "18rem" }}>
              <Card.Header> Customer ID : {item.customerRefId}</Card.Header>
              <Card.Body className="card">
                <Card.Title>
                  <img
                    src="https://www.parkcityflyfishing.com/wp-content/uploads/Dummy-Profile-Picture.jpg"
                    className="profile"
                  />{" "}
                  {item.loanAmount > 1 ? (
                    <td className="text-success"> Approved</td>
                  ) : (
                    <td className="loan-rejected"> Rejected</td>
                  )}
                </Card.Title>
                <Card.Text>
                  {item.loanAmount > 1 ? (
                    <td className="loan-approved ">
                      {" "}
                      Thank you for your interst towards our bank.Contact bank
                      to know more about your loand
                    </td>
                  ) : (
                    <td className="text-danger">
                      {" "}
                      You do not meet the bank requirement. Thank you for your
                      interst{" "}
                    </td>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
