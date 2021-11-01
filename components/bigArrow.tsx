export default function BigArrow({ downOnMobile }: { downOnMobile?: boolean }) {
  return (
    <>
      <span className="d-none d-md-block" style={{ fontSize: 80 }}>
        ➡
      </span>
      <span className="d-md-none" style={{ fontSize: 40 }}>
        {downOnMobile ? "⬇" : " ➡"}
      </span>
    </>
  );
}
