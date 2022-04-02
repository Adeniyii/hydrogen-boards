import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ScrollToTop from "components/common/ScrollToTop";
import { auth } from "./index";
import LandingPage from "../components/LandingPage";
import AuthLayout from "../layout/AuthLayout";

const childRoutes = (Layout, routes) =>
  routes.map(
    ({ children, path, component: Component, name, breadcrumb }, index) =>
      children ? (
        // Route item with children
        children.map(
          ({ path, component: Component, name, breadcrumb }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout breadcrumb={breadcrumb} slug={name}>
                  <Component ComponentName={name} />
                </Layout>
              }
            />
          )
        )
      ) : (
        // Route item without children
        <Route
          key={index}
          path={path}
          element={
            <Layout breadcrumb={breadcrumb} slug={name}>
              <Component ComponentName={name} />
            </Layout>
          }
        />
      )
  );

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {childRoutes(AuthLayout, auth)}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
