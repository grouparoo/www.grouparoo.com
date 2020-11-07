import Image, { MyImageProps } from "../Image";

export type DocImageProps = MyImageProps;

export default function DocImage(props: DocImageProps) {
  const imageProps = Object.assign({}, props);
  const { src } = imageProps;

  if (src.includes("data:image")) {
    imageProps.src = src;
  } else {
    imageProps.src = `/images/${src}`;
  }

  return <Image {...imageProps} />;
}
