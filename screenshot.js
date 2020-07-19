const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
  console.log('Please provide a URL as the first argument');
}

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'screenshot.png' });
  browser.close();
}
run();

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
