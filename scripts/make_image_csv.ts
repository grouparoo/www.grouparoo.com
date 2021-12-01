import "../setup";
import path from "path";
import fs from "fs";
import glob from "glob";
import sizeOf from "image-size";
import { stringify } from "csv-stringify";

const publicPath = path.resolve(path.join(__dirname, "..", "public"));

async function build() {
  const fullPaths = getImages();
  await writeCsv(fullPaths);
}

function getImages() {
  let paths = [];
  paths = paths.concat(getImageType("png"));
  paths = paths.concat(getImageType("svg"));
  paths = paths.concat(getImageType("gif"));
  paths = paths.concat(getImageType("jpg"));
  paths = paths.concat(getImageType("jpeg"));
  paths = paths.concat(getImageType("webp"));
  return paths;
}

function getImageType(extension) {
  return glob.sync(path.join(publicPath, "**", `*.${extension}`));
}

async function getRow(fullPath) {
  const dim = await sizeOf(fullPath);
  const pathName = fullPath.replace(publicPath, "");
  if (dim) {
    const ratio = (dim.width * 1.0) / dim.height;
    return [pathName, dim.width, dim.height, ratio];
  }
  return null;
}

async function writeCsv(fullPaths) {
  const filename = path.join(publicPath, "images.csv");
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  const columns = ["path", "width", "height", "ratio"];

  const fileStream = fs.createWriteStream(filename);
  const csvStream = stringify({ header: true, columns });
  csvStream.pipe(fileStream);

  for (const fullPath of fullPaths) {
    console.log(fullPath);
    const row = await getRow(fullPath);
    if (row) {
      csvStream.write(row);
    }
  }

  // wait for the file handle to close
  await new Promise((resolve) => {
    fileStream.once("close", resolve);
    csvStream.end();
  });
}

function main() {
  build().then(
    () => {
      process.exit(0);
    },
    (error) => {
      console.error(`ERROR! ${error}`);
      process.exit(1);
    }
  );
}

// run it!
main();
