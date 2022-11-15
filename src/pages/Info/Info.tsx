import logoIcon from "../../img/info-logo.svg";
import { Button } from "namba-one-ui";
import { useNavigate } from "react-router-dom";
import { LazyImage } from "../../components/LazyImage";
import "./Info.scss";

export type Props = {
  nambaToken: string | null;
};

function Info(props: Props) {
  const navigate = useNavigate();

  const handleСontinue = () => {
    return navigate("/main/?goBack");
  };

  return (
    <div className="container info">
      <div className="info__content">
        <div className="info__image-wrap">
          <LazyImage src={logoIcon} />
        </div>
        <div className="info__label">
          Получайте все счета и квитанции в одном месте с возможностью
          моментальной оплаты
        </div>
      </div>
      <Button
        onClick={handleСontinue}
        type="button"
        variant="contained"
        title="Продолжить"
      ></Button>
    </div>
  );
}

export default Info;
