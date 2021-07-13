import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Dashboad from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <main className="main">
          <Route path="/" exact component={Dashboad} />
          <Route path="/Car/:id" exact component={Main} />
          <Route path="/Cars" component={Dashboad} />
        </main>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
