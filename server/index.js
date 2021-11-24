const fs = require("fs");

const path = "./output.json";
const encoding = "utf-8";

const callback = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile(path, encoding, callback);


fs.writeFile()