const path = require("path");
const request = require("request");
const fs = require("fs");

const imageDownloadUrl = "https://unsplash.it/3360/1890/?random";

let i = 1;
const max = 200;

downloadIMG(i);

function downloadIMG() {
  const fileName = `${path.resolve(__dirname)}/images/${i}.png`;
  try {
    request(imageDownloadUrl)
      .pipe(fs.createWriteStream(fileName))
      .on("close", function() {
        console.log(`Download Complete Image ${i} !!`);
        i += 1;
        checkAndDownloadImage();
      });
  } catch (err) {
    console.log(err);
    console.log("Error on downloading image");
  }
}

function checkAndDownloadImage() {
  if (i <= max) {
    downloadIMG();
  }
}
