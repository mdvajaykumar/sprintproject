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
    <div>
      <div className="row bg-secondary">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="text-center text-light">Customer page </h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          {[...state.lad.list].map((item, index) => (
            <div className="m-2 customer-card row " key={index}>
              <Card
                border="primary"
                bg="primary"
                className="col-4"
                style={{ width: "18rem" }}
              >
                <Card.Header> Customer ID : {item.customerRefId}</Card.Header>
                <Card.Body className="card">
                  <Card.Title>
                    <img
                      src="https://www.parkcityflyfishing.com/wp-content/uploads/Dummy-Profile-Picture.jpg"
                      className="profile"
                    />{" "}
                    {item.loanAmount > 1 ? (
                      <span className="loan-approved"> Approved</span>
                    ) : (
                      <span className="loan-rejected"> Rejected</span>
                    )}
                  </Card.Title>
                  <Card.Text>
                    {item.loanAmount > 1 ? (
                      <span className="loan-approved ">
                        {" "}
                        Thank you for your interst towards our bank.Contact bank
                        to know more about your loan amount and emi and tenure
                        etc.
                      </span>
                    ) : (
                      <span className="loan-rejected">
                        {" "}
                        You do not meet the bank requirement. Thank you for your
                        interst.{" "}
                      </span>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
