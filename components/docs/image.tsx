import { Image } from "react-bootstrap";

export default function DocImage(props) {
  const { src, ...imageProps } = props;

  if (src.includes("data:image")) {
    imageProps.src = src;
  } else {
    imageProps.src = require(`../../public/images/${src}`);
  }

  return (
    <Image style={{ maxWidth: "100%", marginBottom: 10 }} {...imageProps} />
  );
}
