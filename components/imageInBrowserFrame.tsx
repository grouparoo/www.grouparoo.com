import Image from "./Image";

export default function ImageInBrowserFrame({
  src,
  height,
  width,
  alt,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
}) {
  const borderColor = "#cccccc";
  const buttonBorderColor = "#dadada";
  const thickness = 4;
  const buttons = ["red", "yellow", "green"];

  return (
    <div
      style={{
        padding: "20px 0 0",
        borderRadius: thickness,
        borderBottom: `${thickness}px solid ${borderColor}`,
        borderLeft: `${thickness}px solid ${borderColor}`,
        borderRight: `${thickness}px solid ${borderColor}`,
        background: `${borderColor}`,
        display: "inline-block",
        position: "relative",
        lineHeight: 0,
        filter: `drop-shadow(6px 6px 12px rgba(0,0,0,0.5))`,
      }}
    >
      <div
        style={{
          display: "block",
          height: 15,
          position: "absolute",
          top: 5,
          left: 1,
        }}
      >
        {buttons.map((button, idx) => (
          <span
            key={`button-${idx}`}
            style={{
              height: 8,
              width: 8,
              borderRadius: 8,
              border: `1px solid ${buttonBorderColor}`,
              float: "left",
              margin: "0 0 0 4px",
              backgroundColor: button,
            }}
          />
        ))}
      </div>

      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
}
