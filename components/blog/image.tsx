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

  // imageProps.src = require(src);

  // TODO: use source
  return (
    <p className="blogImageContainer" style={containerStyle}>
      <img {...imageProps} src={src} />
    </p>
  );
}

export default Image;
