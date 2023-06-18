const path = require("path");

const rootDirectory = path.dirname(require.main.filename);

//CSS PATH
const stylePath = path.join(rootDirectory, "style");

module.exports = {
  stylePath,
};
