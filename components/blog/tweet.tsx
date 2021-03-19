import { useEffect } from "react";

export default function Tweet({ height, nojs, children }) {
  if (!nojs) {
    useEffect(() => {
      const twttr = window["twttr"];
      if (!twttr) {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.body.appendChild(s);
      }
    }, []);
  }

  const style: any = { backgroundColor: "transparent" };
  if (height) {
    style.height = height;
  }
  return (
    <blockquote className="twitter-tweet" style={style}>
      {children}
    </blockquote>
  );
}
