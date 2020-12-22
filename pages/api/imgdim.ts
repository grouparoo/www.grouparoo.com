import path from "path";
import fs from "fs";
import glob from "glob";
import sizeOf from "image-size";

function err(res, message, json = {}) {
  res.statusCode = 400;
  res.end(JSON.stringify({ error: message, ...json }));
}

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { query } = req;
  if (!query.url) {
    return err(res, `No image url given`);
  }

  const imgPath = path.join("public", query.url);

  if (!fs.existsSync(imgPath)) {
    return err(res, `File not found: ${imgPath}`, { imgPath, query });
  }

  let dim = null;
  try {
    dim = sizeOf(imgPath);
  } catch (error) {
    return err(res, `Size issue: ${error.message}`, { imgPath, query });
  }

  if (!dim || !dim.height || !dim.width) {
    return err(res, `Size could not be determined: ${imgPath}`, {
      imgPath,
      query,
      dim,
    });
  }

  const ratio = (dim.width * 1.0) / dim.height;
  const dimensions = [];
  let optimized = false;
  let message = null;

  const width = parseInt(query.w);
  const height = parseInt(query.h);
  if (width) {
    dimensions.push({ w: width, h: Math.round(width / ratio) });
  }
  if (height) {
    dimensions.push({ w: Math.round(height * ratio), h: height });
  }

  if (dimensions.length === 0) {
    return err(res, `Proposed height and width needed`, {
      imgPath,
      query,
      dim,
    });
  }

  dimensions.forEach((dim) => {
    if (width === dim.w && height === dim.h) {
      optimized = true;
    }
  });

  if (optimized) {
    message = "Optimized";
  } else {
    message = `W x H: ${dimensions.map((d) => `${d.w} x ${d.h}`).join(", ")}`;
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ optimized, message, dimensions, ratio }));
}
