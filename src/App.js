import { Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplates";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./store/action/user";
import { TOKEN } from "./util/config";

import CheckoutTemplates from "./templates/CheckoutTemplate";
import Checkout from "./View/Checkout";
import AuthTemplate from "./templates/AuthTemplates";
import Home from "./View/Home";
import Contact from "./View/Contact";
import News from "./View/News";
import Login from "./View/Login";
import Register from "./View/Register";
import Detail from "./View/Detail";
import Loading from "./Components/LoadingScreen/index.jsx";

export const history = createBrowserHistory("./templates/CheckoutTemplate");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token)
      dispatch(
        fetchMe(() => {
          window.location.reload();
        })
      );
  }, [dispatch]);

  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <Router history={history}>
      {isLoading && <Loading />}
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <AuthTemplate path="/login" exact Component={Login} />
        <AuthTemplate path="/register" exact Component={Register} />
        <CheckoutTemplates path="/checkout/:id" Component={Checkout} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
