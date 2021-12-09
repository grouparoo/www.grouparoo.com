import NextImage from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function isDebugging(props) {
  if (process.env.NODE_ENV !== "development") {
    return false;
  }
  if (props.debug === false) {
    return false;
  }
  if (!props.width || !props.height || !props.src) {
    return false;
  }
  if (props.src.startsWith("http:") || props.src.startsWith("https:")) {
    return false;
  }
  return true;
}

export default function DebugImage(props) {
  const [data, setData] = useState({ error: null, message: null });
  const { error, message } = data;
  const debug = error || message;

  const fetchData = useCallback(async () => {
    const params = { w: props.width, h: props.height, url: props.src };
    const result: any = await axios.get("/api/imgdim", { params });
    const { optimized, error, message } = result.data;
    if (optimized) {
      setData({ error: null, message: null });
    } else {
      setData({ error, message });
    }
  }, [props.height, props.src, props.width]);

  const debugging = useMemo(() => isDebugging(props), [props]);

  useEffect(() => {
    if (debugging) {
      fetchData();
    }
  }, [fetchData, debugging]);

  if (!debugging) {
    //  return regular image
    return <NextImage {...props} />;
  }

  return (
    <div style={{ position: "relative", margin: 0, padding: 0 }}>
      <NextImage {...props} />
      {debug && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "red",
            color: "black",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "serif",
            padding: 5,
            margin: 0,
            lineHeight: "100%",
            textAlign: "left",
            display: "block",
          }}
        >
          {debug}
        </div>
      )}
    </div>
  );
}
