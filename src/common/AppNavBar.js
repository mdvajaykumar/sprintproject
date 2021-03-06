import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/ladCustomerRequestPage">
            CustomerLoanRequestDetailes
          </Nav.Link>
          <Nav.Link as={Link} to="/ladLoanListpage">
            LoanStatus
          </Nav.Link>
          <Nav.Link as={Link} to="/customerpage">
            customer page
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
