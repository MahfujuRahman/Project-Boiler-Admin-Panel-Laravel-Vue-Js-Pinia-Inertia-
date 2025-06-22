//app layout
import Layout from "../Layouts/Layout.vue";
//Dashboard
import Dashboard from "../Management/Dashboard/Dashboard.vue";
//SettingsRoutes
import SettingsRoutes from "../Management/Settings/setup/routes.js";
//routes
import ProductCategoryRoutes from "../Management/ProductManagement/ProductCategory/setup/routes.js";
import TestOneThreeRoutes from "../Management/TestOneThree/setup/routes.js";

import UserRoutes from "../Management/UserManagement/User/setup/routes.js";
import BlogCategroy from "../Management/BasicTestModule/BlogCategory/setup/routes.js";

import Testing from "../Management/Testing/setup/routes.js";

const routes = {
  path: "",
  component: Layout,
  children: [
    {
      path: "dashboard",
      component: Dashboard,
      name: "adminDashboard",
    },
    //management routes
    ProductCategoryRoutes,
    TestOneThreeRoutes,
    UserRoutes,
    BlogCategroy,
    //settings
    SettingsRoutes,
    Testing,
  ],
};

export default routes;
