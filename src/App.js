import logo from "./logo.svg";
import "./App.css";
import { Lad } from "./components/Lad";
import { Ladlist } from "./components/Ladlist";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { LoanPrograme } from "./components/LoanPrograme";

function App() {
  return (
    <div>
      <Router>
        <AppNavBar></AppNavBar>
        <Route path="/.ladpage" exact>
          <Lad></Lad>
        </Route>
        <Route path="/.ladlistpage" exact>
          <Ladlist></Ladlist>
        </Route>
        <Route path="/" exact>
          <LoanPrograme></LoanPrograme>
        </Route>
      </Router>
    </div>
  );
}

export default App;
