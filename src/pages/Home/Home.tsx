import { Loader } from "namba-one-ui";
import { LazyImage } from "../../components/LazyImage";
import logoIcon from "../../img/logo.svg";

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="loader-page">
      <div className="loader-page__content">
        <LazyImage src={logoIcon} />
      </div>
      <Loader type="loader" />
    </div>
  );
};
