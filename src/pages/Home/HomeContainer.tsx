import { Loader } from "namba-one-ui";
import React, { useEffect, useRef, useState } from "react";
import { useAuthMeQuery } from "../../store/app/app.api";
import { localStorageSetItem } from "../../utils/storage";
import Info from "../Info";
import { Home } from "./Home";
import "./Home.scss";

function HomeContainer() {
  const urlParams = new URLSearchParams(window.location.search);
  const nambaToken = urlParams.get("token");
  nambaToken && localStorageSetItem("token", nambaToken);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const { isLoading, isError, data } = useAuthMeQuery("");

  useEffect(() => {
    if (data) {
      console.log("data:", data);
    }
  }, [data]);

  useEffect(() => {
    timerRef.current = setTimeout(() => setShowInfo(true), 3000);
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  if (isLoading) {
    return <Loader type="loader-popup" variant="light" />;
  }

  if (isError) {
    return <h1>Что то пошло не так!</h1>;
  }

  if (!showInfo) {
    return <Home />;
  }

  return <Info nambaToken={nambaToken} />;
}

export default HomeContainer;
