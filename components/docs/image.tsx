import Image, { MyImageProps } from "../Image";

export type DocImageProps = MyImageProps;

export default function DocImage(imageProps: DocImageProps) {
  const { src } = imageProps;

  if (src.includes("data:image")) {
    imageProps.src = src;
  } else {
    imageProps.src = `/images/${src}`;
  }

  return (
    <Image style={{ maxWidth: "100%", marginBottom: 10 }} {...imageProps} />
  );
}
