import Vue from "vue";
import { store } from "@/store";
import VueRouter from "vue-router";

// Layout
import WebsiteLayout from "@/views/App/WebsiteLayout";
import AdminPanelLayout from "@/views/App/AdminPanelLayout";

// Site Routes
import RegistrationRoute from "@/router/site/account/registration";
import ForgotPasswordRoute from "@/router/site/account/forgot_password";
import PasswordExpiryRoute from "@/router/site/account/password_expiry";
import ResetTFARoute from "@/router/site/account/reset_tfa";
import AccountRoute from "@/router/site/account/account";

// Admin Routes
import SystemLogRoute from "@/router/admin/system_log";

// Home Page (Public, Vender, Admin)
import Home from "@/views/Website/Home";
import Dashboard from "@/views/AdminPanel/Dashboard";

Vue.use(VueRouter);

// handle "Avoided redundant navigation to current location"
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    component: WebsiteLayout,
    children: [
      {
        path: "",
        component: TenderNoticeList,
        meta: {
          authorize: ["Public"]
        }
      },
      {
        path: "home",
        component: Home,
        meta: {
          authorize: ["Vendor"]
        }
      },
      ...RegistrationRoute,
      ...ForgotPasswordRoute,
      ...PasswordExpiryRoute,
      ...ResetTFARoute,
      ...AccountRoute
    ]
  },
  {
    path: "/a",
    component: AdminPanelLayout,
    children: [
      {
        path: "",
        component: Dashboard,
        meta: {
          authorize: ["Admin"]
        }
      },
      ...ManagementRoute,
      ...SystemLogRoute,
      ...SettingRoute
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //each page

  // get page meta's authorize
  const { authorize } = to.meta;

  // current status
  const loggedIn = store.state.account.l;
  const isAdmin = store.state.account.a;

  // check current status first
  // check page role
  if (loggedIn) {
    if (isAdmin) {
      if (authorize.length && authorize.includes("Admin")) {
        next();
      } else {
        return next({ path: "/a" });
      }
    } else if (!isAdmin) {
      if (authorize.length && authorize.includes("Vendor")) {
        next();
      } else {
        return next({ path: "/home" });
      }
    }
  } else {
    if (authorize.length && authorize.includes("Public")) {
      next();
    } else {
      const loginpath = window.location.pathname;
      return next({ path: "/login", query: { redirect: loginpath } });
    }
  }
  // to that page
  next();
});
