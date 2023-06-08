import Main from "../pages/Main/Main";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const MAIN_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";

// kol neesu prisijnugęs
export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      component: Login,
    },
    {
      path: REGISTER_ROUTE,
      component: Register,
    },
  ],
};

// kai esu prisijungęs
export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      component: Main,
    },
    {
      path: CONTACTS_ROUTE,
      component: Contacts,
    },
  ],
};
