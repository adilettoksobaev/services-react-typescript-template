import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    timerRef.current = setTimeout(() => setShowInfo(true), 3000);
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  if (!showInfo) {
    return <Home />;
  }

  return <Info nambaToken={nambaToken} />;
}

export default HomeContainer;
