import { Switch } from "wouter";
import { Route } from "wouter";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import HomeAdminPage from "./pages/HomeAdminPage";
import Report from "./pages/Reports";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={IndexPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/homeAdmin" component={HomeAdminPage} />
        <Route path="/homeAdmin/reports/:id" component={Report} />
        <Route path="/addUser" component={UserPage}/>
      </Switch>
    </div>
  );
}

export default App;
