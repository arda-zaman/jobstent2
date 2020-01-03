import puppeteer from 'puppeteer';

const http_build_query = (jsonObj) => {
  const keys = Object.keys(jsonObj);
  const values = keys.map(key => jsonObj[key]);

  return keys
    .map((key, index) => {
      return `${key}=${values[index]}`;
    })
    .join("&");
};

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