import React, { useState, useEffect } from "react";
import "./LazyImage.scss";

const placeHolder =
    "data:image/png;base64,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";

type Props = {
    src: string;
    alt?: string;
    className?: string;
    placeholder?: string;
};
export const LazyImage: React.FC<Props> = ({ src, alt = "", className = "", placeholder = placeHolder }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

    const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.classList.add("loaded");
    };

    const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.classList.add("has-error");
    };

    useEffect(() => {
        let observer: IntersectionObserver;
        let didCancel = false;

        if (imageRef && imageSrc !== src) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                setImageSrc(src);
                                observer.unobserve(imageRef);
                            }
                        });
                    },
                    {
                        threshold: 0.01,
                        rootMargin: "75%",
                    }
                );
                observer.observe(imageRef);
            } else {
                // Old browsers fallback
                setImageSrc(src);
            }
        }
        return () => {
            didCancel = true;
            // on component cleanup, we remove the listner
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef!);
            }
        };
    }, [src, imageSrc, imageRef]);

    return (
        <img
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            className={`lazy-image ${className}`}
            onLoad={onLoad}
            onError={onError}
        />
    );
};
