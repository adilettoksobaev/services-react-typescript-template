import { Loader } from "namba-one-ui";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/Home/HomeContainer"));
const MainPage = React.lazy(() => import("../pages/Main/Main"));

function MainRouter() {
  return (
    <Suspense fallback={<Loader type="loader-popup" variant="light" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
