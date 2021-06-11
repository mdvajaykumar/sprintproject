import logo from "./logo.svg";
import "./App.css";
import {
  Lad,
  LadCustomreLoanRequest,
} from "./components/LadCustomreLoanRequest";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { CustomerProfile } from "./components/CustomerProfile";
import { Home } from "./components/Home";
import { LadLoanList } from "./components/LadLoanList";
import { ContactUs } from "./components/Contactus";

function App() {
  return (
    <div>
      <Router>
        <AppNavBar></AppNavBar>
        <Route path="/ladCustomerRequestPage" exact>
          <LadCustomreLoanRequest></LadCustomreLoanRequest>
        </Route>
        <Route path="/ladLoanListpage" exact>
          <LadLoanList></LadLoanList>
        </Route>
        <Route path="/customerpage" exact>
          <CustomerProfile></CustomerProfile>
        </Route>
        <Route path="/" exact>
          <ContactUs></ContactUs>
        </Route>
      </Router>
    </div>
  );
}

export default App;
