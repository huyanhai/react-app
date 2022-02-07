import { lazy } from "react";
export const routes = [
  {
    path: "pay",
    commponents: lazy(() => import("../views/pay")),
  },
];
