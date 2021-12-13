import React, { CSSProperties, useEffect } from "react";

export default function Tweet({ height, nojs, children }) {
  useEffect(() => {
    if (!nojs) {
      const twttr = window["twttr"];
      if (!twttr) {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.body.appendChild(s);
      }
    }
  }, [nojs]);

  const style: CSSProperties = { backgroundColor: "transparent" };
  if (height) {
    style.height = height;
  }
  return (
    <blockquote className="twitter-tweet" style={style}>
      {children}
    </blockquote>
  );
}
