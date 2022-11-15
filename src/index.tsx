import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MainRouter from "./router";
import "./i18n/i18n";
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
            <MainRouter />
        </BrowserRouter>
    </Provider>
);
