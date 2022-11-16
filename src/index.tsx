import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MainRouter from "./router";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorInfo";
import "./i18n/i18n";
import "./scss/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <MainRouter />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);
