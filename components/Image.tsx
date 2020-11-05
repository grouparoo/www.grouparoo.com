import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

import { useBootstrapPrefix } from "react-bootstrap/ThemeProvider";
import { BsPrefixAndClassNameOnlyProps } from "react-bootstrap/helpers";

export interface MyImageProps
  extends BsPrefixAndClassNameOnlyProps,
    React.ImgHTMLAttributes<HTMLImageElement> {
  fluid?: boolean;
  rounded?: boolean;
  roundedCircle?: boolean;
  thumbnail?: boolean;
}

export const propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: PropTypes.string,
  /**
   * Sets image as fluid image.
   */
  fluid: PropTypes.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: PropTypes.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: PropTypes.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: PropTypes.bool,
};

const defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false,
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

    return (
      <img ref={ref} {...props} className={classNames(className, classes)} />
    );
  }
);

MyImage.displayName = "MyImage";
MyImage.propTypes = propTypes;
MyImage.defaultProps = defaultProps;

export default MyImage;
