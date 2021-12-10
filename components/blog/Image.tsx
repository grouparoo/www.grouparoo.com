import React from "react";
import Image, { MyImageProps } from "../Image";

export type BlogImageProps = MyImageProps & {
  permalink?: boolean;
  bottomSpace?: number;
};

function BlogImage(props: BlogImageProps) {
  const { permalink, bottomSpace, ...otherProps } = props;

  const imageProps: MyImageProps = otherProps;
  imageProps.outline = true;

  const { src } = imageProps;

  const marginBottom = 20;
  const containerStyle: any = {
    marginBottom: (bottomSpace || 0) + marginBottom,
  };

  if (
    src.includes("data:image") ||
    src.startsWith("http:") ||
    src.startsWith("https:")
  ) {
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
      <Image alt={imageProps.alt} {...imageProps} />
    </div>
  );
}

export default BlogImage;
