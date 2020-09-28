const env = require("./config.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env], "import-glob-array"]
};
