function Image(props) {
  const {
    centered,
    maxHeight,
    maxWidth,
    bottomSpace,
    source,
    outline,
    src,
    ...imageProps
  } = props;

  const containerStyle = { textAlign: null, marginBottom: null };
  imageProps.style = imageProps.style || {};

  if (centered) {
    containerStyle.textAlign = "center";
  }

  if (maxHeight) {
    imageProps.style.maxHeight = maxHeight;
  }

  if (maxWidth) {
    imageProps.style.width = "100%";
    imageProps.style.maxWidth = maxWidth;
  } else {
    imageProps.style.maxWidth = "100%";
  }

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
    imageProps.src = require(`../../public/posts/${src}`);
  }

  return (
    <p style={containerStyle}>
      <img {...imageProps} />
    </p>
  );
}

export default Image;
