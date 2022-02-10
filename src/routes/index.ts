import { lazy } from "react";
export const routes = [
  {
    path: "pay",
    commponents: lazy(() => import("../views/pay")),
  },
  {
    path: "details/:id",
    commponents: lazy(() => import("../views/details")),
  },
];
