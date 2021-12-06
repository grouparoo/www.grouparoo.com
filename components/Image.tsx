import classNames from "classnames";
import React from "react";

import { useBootstrapPrefix } from "react-bootstrap/ThemeProvider";
import { BsPrefixOnlyProps } from "react-bootstrap/helpers";

import NextImage from "./DebugImage";
/* Most of this is from next/image */
declare const VALID_LOADING_VALUES: readonly ["lazy", "eager", undefined];
declare type LoadingValue = typeof VALID_LOADING_VALUES[number];
declare type ImageProps = Omit<
  JSX.IntrinsicElements["img"],
  "src" | "srcSet" | "ref" | "width" | "height" | "loading"
> & {
  src: string;
  quality?: number | string;
  priority?: boolean;
  loading?: LoadingValue;
  unoptimized?: boolean;
} & (
    | {
        width: number | string;
        height: number | string;
        unsized?: false;
      }
    | {
        width?: number | string;
        height?: number | string;
        unsized: true;
      }
  );
/* end from next/image */

export type MyImageProps = ImageProps &
  BsPrefixOnlyProps & {
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
    outline?: boolean;
    centered?: boolean;
  };

function getMainComponent(props, imgClasses) {
  const { src, height, width } = props;

  if (src && (src.startsWith("http:") || src.startsWith("https:"))) {
    // next/image doesn't handle things not in public directory
    const imgStyle: any = {};
    imgStyle.height = height;
    imgStyle.width = width;
    imgStyle.maxHeight = "100%";
    imgStyle.maxWidth = "100%";
    props.style = imgStyle;
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} className={imgClasses} />;
  }

  return <NextImage {...props} className={imgClasses} />;
}

// TODO: Figure out this
// eslint-disable-next-line react/display-name
const MyImage = React.forwardRef<HTMLImageElement, MyImageProps>(
  (
    {
      bsPrefix,
      className,
      fluid,
      rounded,
      roundedCircle,
      thumbnail,
      centered,
      outline,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "img");
    const classes = classNames(
      fluid && `${bsPrefix}-fluid`,
      rounded && `rounded`,
      roundedCircle && `rounded-circle`,
      thumbnail && `${bsPrefix}-thumbnail`,
      outline && "imageOutline"
    );
    const imgClasses = classNames(className, classes);
    const imgComponent = getMainComponent(props, imgClasses);

    if (centered) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {imgComponent}
        </div>
      );
    } else {
      return imgComponent;
    }
  }
);

export default MyImage;
