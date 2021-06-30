import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Home } from "../pages/Home/Home";
import { UserForm } from "../pages/UserForm/UserForm";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/userform">
        <UserForm />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <PageNotFound />
      </Route>


    </Switch>
  );
};

export default Routes;
