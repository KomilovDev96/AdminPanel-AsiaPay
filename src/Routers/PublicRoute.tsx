import React from "react";

const Verification = React.lazy(() => import("../Pages/VerificationPage"));
const SiginPage = React.lazy(() => import("../Pages/Sigin"));

export const publicRoute = [
  {
    path: "/",
    component: <SiginPage />,
    key: "sigin",
  },
  {
    path: "verification",
    component: <Verification />,
    key: "verification",
  },
];
