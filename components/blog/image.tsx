import React from "react";
import Image, { MyImageProps } from "../Image";

export type BlogImageProps = MyImageProps & {
  permalink?: boolean;
  centered?: boolean;
  maxHeight?: number;
  maxWidth?: number;
  bottomSpace?: number;
};

function BlogImage(props: BlogImageProps) {
  const {
    permalink,
    centered,
    maxHeight,
    maxWidth,
    bottomSpace,
    ...otherProps
  } = props;

  const imageProps: MyImageProps = otherProps;
  const { src } = imageProps;
  const containerStyle = { textAlign: null, marginBottom: null };
  imageProps.style = imageProps.style || {};

  if (centered) {
    containerStyle.textAlign = "center";
  }

  // if (maxHeight) {
  //   imageProps.style.maxHeight = maxHeight;
  // }

  // if (maxWidth) {
  //   imageProps.style.width = "100%";
  //   imageProps.style.maxWidth = maxWidth;
  // } else {
  //   imageProps.style.maxWidth = "100%";
  // }

  if (bottomSpace) {
    containerStyle.marginBottom = bottomSpace;
  }

  imageProps.style.borderColor = "darkgray";
  imageProps.style.borderWidth = 2;
  imageProps.style.borderStyle = "solid";
  imageProps.style.backgroundColor = "white";

  if (src.includes("data:image")) {
    imageProps.src = src;
  } else {
    //if (permalink) {
    //  imageProps.src = `https://www.grouparoo.com/posts/${src}`;
    //} else {
    imageProps.src = `/posts/${src}`;
    //}
  }

  return (
    <p style={containerStyle}>
      <Image {...imageProps} />
    </p>
  );
}

export default BlogImage;
