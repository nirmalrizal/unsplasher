#!/usr/bin/env node

const fs = require('fs');
const ora = require('ora');
const path = require('path');
const yargs = require('yargs');
const request = require('request');

const argv = yargs
  .options({
    p: {
      alias: 'path',
      describe: 'Path to save images',
      string: true
    },
    n: {
      alias: 'num',
      describe: 'Total number of images to download',
      string: true
    },
    c: {
      alias: 'category',
      describe: 'Category keyword separated by comma',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

let i = 1;
const max = argv.num ? argv.num : 10;
const savePath = argv.path ? argv.path : 'unsplashes';

let imageDownloadUrl = argv.category
  ? `https://source.unsplash.com/featured/3360x1890?${argv.category}`
  : 'https://source.unsplash.com/featured/3360x1890';

if (!fs.existsSync(savePath)) {
  fs.mkdirSync(savePath);
}
checkAndDownloadImage();

function downloadIMG() {
  const fileName = `${savePath}/${i}.jpeg`;
  try {
    const spinner = ora(`Downloading image ${i}`).start();
    request(imageDownloadUrl)
      .pipe(fs.createWriteStream(fileName))
      .on('close', function(err) {
        if (err) {
          console.log(err);
        }
        spinner.succeed(`Downloaded image ${i}`);
        i += 1;
        checkAndDownloadImage();
      });
  } catch (err) {
    console.log(err);
    console.log('Error on downloading image');
  }
}

function checkAndDownloadImage() {
  if (i <= max) {
    downloadIMG();
  }
}
