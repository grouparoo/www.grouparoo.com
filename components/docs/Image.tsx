import Image, { MyImageProps } from "../Image";

export type DocImageProps = MyImageProps;

export default function DocImage(imageProps: DocImageProps) {
  const { src } = imageProps;

  if (
    !(
      src.includes("data:image") ||
      src.startsWith("http:") ||
      src.startsWith("https:")
    )
  ) {
    imageProps.src = `/images/${src}`;
  }

  return <Image alt={imageProps.alt} {...imageProps} />;
}
