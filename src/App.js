import logo from "./logo.svg";
import "./App.css";
import { Lad } from "./components/Lad";
import { Ladlist } from "./components/Ladlist";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { CustomerProfile } from "./components/CustomerProfile";
import { Home } from "./components/Home";

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
        <Route path="/.customerpage" exact>
          <CustomerProfile></CustomerProfile>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Router>
    </div>
  );
}

export default App;
