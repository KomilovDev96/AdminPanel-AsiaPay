import React, { ReactElement, Suspense, useEffect } from "react";
import { Routes, Navigate, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Titles } from "./FakerData/FakeTitlelists";
import useAppSelector from "./Hooks/useAppSelector";
import { getLocalStorage, removeLocalStorage } from "./Utils/LocalStorege";
import {
  API_SESSION,
  ISAUTH_SESSION,
  USERID_SESSION,
} from "./Constants/others";
import { parseApiSession } from "./Utils/ParseApiSession";
import ProjectGlobalStyle from "./Styles/GlobalStyles";
import SpinnerPublic from "./Components/Spinner";
import { privateRoute, publicRoute } from "./Routers";
import LayoutMain from "./Layout";

// Route Path
// const LayoutMain = React.lazy(() => import("./Layout"));
// const AdminIndex = React.lazy(() => import("./Pages/TransitionsPage"));
// const SahifaMavjudEmas = React.lazy(() => import("./Pages/404Page"));
import SahifaMavjudEmas from "./Pages/404Page/index";
import AdminIndex from "./Pages/TransitionsPage";

function App(): ReactElement {
  // const location = useLocation();
  // console.log(location);
  // useEffect(() => {
  //   document.title = Titles[location.pathname] ?? "Сахифа топилмади!";
  // }, [location]);

  const { verification, isAuth } = useAppSelector(({ auth }) => auth);

  // Tekshiruv admin bo'lmasa agar
  const apiSession = getLocalStorage(API_SESSION);
  if (!isAuth) {
    const session = apiSession;
    const parsed = parseApiSession(session);
    if (parsed?.status === "active") {
      removeLocalStorage(API_SESSION);
    }
    removeLocalStorage(ISAUTH_SESSION);
  }

  // Tekshiruv agar foydalanuvchi  bo'lmasa
  if (!verification) {
    removeLocalStorage(USERID_SESSION);
    removeLocalStorage(API_SESSION);
  }
  return (
    <ProjectGlobalStyle>
      <Suspense fallback={<SpinnerPublic />}>
        {verification && isAuth ? (
          <Routes>
            <Route path="/" element={<Navigate to="/admin" replace />} />
            <Route path="admin/*" element={<LayoutMain />}>
              <Route index element={<AdminIndex />} />
              {privateRoute.map((route) => (
                <Route
                  element={route.component}
                  path={route.path}
                  key={route.key}
                ></Route>
              ))}
              <Route path="*" element={<SahifaMavjudEmas />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Routes>
            {publicRoute.map((route) => (
              <Route
                element={route.component}
                path={route.path}
                key={route.key}
              ></Route>
            ))}
            <Route path="*" element={<SahifaMavjudEmas />} />
          </Routes>
        )}
        <ToastContainer />
      </Suspense>
    </ProjectGlobalStyle>
  );
}
export default App;
