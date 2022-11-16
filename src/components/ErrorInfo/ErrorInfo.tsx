import errorIcon from "../../img/n1-error.svg";
import { Button } from "namba-one-ui";
import { useNavigate } from "react-router-dom";
import { LazyImage } from "../LazyImage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import "./ErrorFallback.scss";

export type Props = {
  error: FetchBaseQueryError | SerializedError;
  link?: string;
};

export function ErrorInfo(props: Props) {
  const { link, error } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      return navigate(`/${link}`);
    }
    navigate(-1);
  };

  if ("data" in error) {
    return (
      <div className="container error-info">
        <div className="error-info__content">
          <div className="error-info__logo">
            <LazyImage src={errorIcon} />
          </div>
          <div className="error-info__title">{error.status}</div>
          <div className="error-info__label">
            {JSON.stringify(error.data) || "Что-то пошло не так!"}
          </div>
        </div>
        <Button onClick={handleClick} type="button" variant="contained">
          Хорошо
        </Button>
      </div>
    );
  }

  return <div>Что-то пошло не так!</div>;
}
