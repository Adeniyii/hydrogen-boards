// import Forgot from "Pages/Auth/Forgot";
// import Register from "Pages/Auth/Register";
// import LandingPage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";

// export interface routeInterface {
//   path: string
//   name: string
//   header?: string
//   exact?: boolean
//   component?: any
//   breadcrumb?: Record<string, string>[]
//   children?: Array<routeInterface>
// }

// const homeRoute = {
//   path: "/",
//   name: "landing",
//   header: "Landing",
//   component: LandingPage,
// };

const authRoutes = {
  path: "/auth",
  name: "Auth",
  header: "Auth",
  children: [
    {
      path: "/auth/login",
      name: "login",
      header: "Login",
      component: LoginPage,
    },
    // {
    //   path: "/auth/forgot/:id",
    //   name: "Reset",
    //   header: "Reset",
    //   component: Forgot,
    // },
    // {
    //   path: "/auth/forgot",
    //   name: "Forgot",
    //   header: "Forgot",
    //   component: Forgot,
    // },
    {
      path: "/auth/register",
      name: "register",
      header: "Register",
      component: RegisterPage,
    },
  ],
};
export const auth = [authRoutes];
// export const landing = [homeRoute];
