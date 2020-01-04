import puppeteer from 'puppeteer';

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    '--disable-setuid-sandbox',
    '--no-sandbox',
  ],
};

const openConnection = async () => {
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  );
  await page.setViewport({ width: 1920, height: 1080 });
  return { browser, page };
};

const closeConnection = async (page, browser) => {
  page && (await page.close());
  browser && (await browser.close());
};

const generatePDF = async (templateID, userID) => {
  let { browser, page } = await openConnection();
  let pdf = null;

  try {
    await page.setRequestInterception(true);
    await page.goto(`http://localhost:3000/templates/${templateID}/${userID}`, { waitUntil: 'load', timeout: 0 });
    await page.waitForSelector('.g-resume-container');

    pdf = await page.pdf({ format: 'A4', printBackground: true });
  } catch (err) {
    console.log("ERROR::", err);
    return err;
  } finally {
    await closeConnection(page, browser);
    return pdf;
  }
}

module.exports = {
  http_build_query,
  generatePDF
}

const http_build_query = (jsonObj) => {
  const keys = Object.keys(jsonObj);
  const values = keys.map(key => jsonObj[key]);

  return keys
    .map((key, index) => {
      return `${key}=${values[index]}`;
    })
    .join("&");
};