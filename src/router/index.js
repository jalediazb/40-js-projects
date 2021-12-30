import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/color-selector",
    name: "ColorSelector",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ColorSelector.vue")
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/Counter.vue")
  },
  {
    path: "/review-carousel",
    name: "ReviewCarousel",
    component: () => import("../views/ReviewCarousel.vue")
  },
  {
    path: "/responsive-navbar",
    name: "ResponsiveNavbar",
    component: () => import("../views/ResponsiveNavbar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
