import Image, { MyImageProps } from "../Image";

export type DocImageProps = MyImageProps;

export default function DocImage(imageProps: DocImageProps) {
  let { src } = imageProps;

  if (
    !(
      src.includes("data:image") ||
      src.startsWith("http:") ||
      src.startsWith("https:")
    )
  ) {
    src = `/images/${src}`;
  }

  return <Image {...imageProps} alt={imageProps.alt} src={src} />;
}
