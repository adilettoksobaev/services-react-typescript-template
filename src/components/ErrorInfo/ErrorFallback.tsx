import errorIcon from "../../img/n1-error.svg";
import { FallbackProps } from "react-error-boundary";
import { LazyImage } from "../LazyImage";
import "./ErrorFallback.scss";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    console.log("error:", error, resetErrorBoundary);

    return (
        <div className="container error-info">
            <div className="error-info__content">
                <div className="error-info__logo">
                    <LazyImage src={errorIcon} />
                </div>
                <div className="error-info__title">{error.message}</div>
            </div>
        </div>
    );
}
