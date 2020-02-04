import puppeteer from 'puppeteer';

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    '--disable-setuid-sandbox',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--disable-web-security',
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

const generatePDF = async (templateID, userID, pageSize) => {
  let { browser, page } = await openConnection();
  let pdf = null;
  // https://medium.com/@raphaelstaebler/advanced-pdf-generation-for-node-js-using-puppeteer-e168253e159c
  try {
    // await page.setRequestInterception(true);
    await page.goto(`${process.env.HOST}/templates/${templateID}/${userID}`, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitFor('.g-resume-container');

    // await page.emulateMedia('screen');

    pdf = await page.pdf({
      displayHeaderFooter: false,
      printBackground: true,
      pageRanges: `1-${pageSize}`,
      format: 'A4',
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      },
    });
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