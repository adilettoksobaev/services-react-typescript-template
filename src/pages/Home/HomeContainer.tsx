import { useEffect, useRef, useState } from "react";
import { Loader } from "namba-one-ui";
import { ErrorInfo } from "../../components/ErrorInfo/ErrorInfo";
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

  const { isLoading, isError, data, error } = useAuthMeQuery("");

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
    return <ErrorInfo error={error} />;
  }

  if (!showInfo) {
    return <Home />;
  }

  return <Info nambaToken={nambaToken} />;
}

export default HomeContainer;
