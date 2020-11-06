import classNames from "classnames";
import React from "react";

import { useBootstrapPrefix } from "react-bootstrap/ThemeProvider";
import { BsPrefixAndClassNameOnlyProps } from "react-bootstrap/helpers";

import NextImage from "next/image";
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
  BsPrefixAndClassNameOnlyProps & {
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
  };

const MyImage = React.forwardRef<HTMLImageElement, MyImageProps>(
  (
    { bsPrefix, className, fluid, rounded, roundedCircle, thumbnail, ...props },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "img");

    const classes = classNames(
      fluid && `${bsPrefix}-fluid`,
      rounded && `rounded`,
      roundedCircle && `rounded-circle`,
      thumbnail && `${bsPrefix}-thumbnail`
    );
    console.log({ props });

    return <NextImage {...props} className={classNames(className, classes)} />;
  }
);

export default MyImage;
