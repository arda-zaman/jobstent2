import puppeteer from 'puppeteer';

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--timeout=30000',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
    "--proxy-server='direct://'",
    '--proxy-bypass-list=*',
    '--deterministic-fetch',
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
    await page.goto(`http://localhost:3000/templates/${templateID}/${userID}`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('.g-resume-container');

    pdf = await page.pdf({ format: 'A4', printBackground: true });
  } catch (err) {
    res.status(400).json({ message: 'Couldn\'t generated' });
  } finally {
    await closeConnection(page, browser);
    res.status(200).contentType('application/pdf').send(`data:application/pdf;base64,${new Buffer.from(pdf).toString('base64')}`);
  }
}

const generatePDF = async (templateID, userID) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium'
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`http://localhost:3000/templates/${templateID}/${userID}`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('.g-resume-container');
    // await page.waitForFunction("document.querySelector('.g-resume-container') && document.querySelector('.g-resume-container').clientHeight != 0");
    // await page.waitForResponse(response => {
    //   console.log("RESPONSE:", response.request().resourceType());
    //   return response.request() !== false
    // });

    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    return pdf;
  } catch (err) {
    console.log("ERROR::", err);
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