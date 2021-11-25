export default function BigArrow({ downOnMobile }: { downOnMobile?: boolean }) {
  return (
    <>
      <span
        className="d-none d-md-block"
        style={{ fontSize: "80px", lineHeight: "50px" }}
      >
        ➡
      </span>
      <span className="d-md-none" style={{ fontSize: "40px" }}>
        {downOnMobile ? "⬇" : "➡"}
      </span>
    </>
  );
}
