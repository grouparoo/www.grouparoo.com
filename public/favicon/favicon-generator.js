const sharp = require("sharp");
const fs = require("fs");

const outFiles = [
  "apple-touch-icon-114x114.png",
  "apple-touch-icon-120x120.png",
  "apple-touch-icon-144x144.png",
  "apple-touch-icon-152x152.png",
  "apple-touch-icon-57x57.png",
  "apple-touch-icon-60x60.png",
  "apple-touch-icon-72x72.png",
  "apple-touch-icon-76x76.png",
  "favicon-128x128.png",
  "favicon-16x16.png",
  "favicon-196x196.png",
  "favicon-32x32.png",
  "favicon-96x96.png",
  "favicon.ico",
  "mstile-144x144.png",
  "mstile-150x150.png",
  "mstile-310x150.png",
  "mstile-310x310.png",
  "mstile-70x70.png",
];

const faviconBase = fs.readFileSync(__dirname + "/favicon-base.png");
outFiles.forEach((file) => {
  const [path, extension] = file.split(".");
  const [width = 64, height = 64] =
    extension === "png"
      ? path.split("-").slice(-1)[0].split("x").map(Number)
      : [];
  sharp(faviconBase)
    .resize(width, height)
    .toFile(__dirname + "/" + file, (err, info) => err && console.error(err));
});
