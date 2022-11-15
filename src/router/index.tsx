import { Loader } from "namba-one-ui";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/Home/HomeContainer"));

function MainRouter() {
    return (
        <Suspense fallback={<Loader variant="light" />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;
