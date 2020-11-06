import React from "react";
import Image, { MyImageProps } from "../Image";

export type BlogImageProps = MyImageProps & {
  permalink?: boolean;
  bottomSpace?: number;
  maxHeight?: number;
};

function BlogImage(props: BlogImageProps) {
  const { permalink, bottomSpace, maxHeight, ...otherProps } = props;

  const imageProps: MyImageProps = otherProps;
  const { src } = imageProps;
  const marginBottom = 20;
  const containerStyle: any = {
    // borderColor: "lightgray",
    // borderWidth: 2,
    // borderStyle: "solid",
    // backgroundColor: "white",
    marginBottom: (bottomSpace || 0) + marginBottom,
  };

  if (src.includes("data:image")) {
    imageProps.src = src;
  } else {
    if (permalink) {
      imageProps.src = `https://www.grouparoo.com/posts/${src}`;
    } else {
      imageProps.src = `/posts/${src}`;
    }
  }

  return (
    <div style={containerStyle}>
      <Image {...imageProps} />
    </div>
  );
}

export default BlogImage;
