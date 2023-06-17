import puppeteer from 'puppeteer';

async function openWebPage() {
    const browser = await puppeteer.launch({
        headless: 'new',
        slowMo: 300
    });
    const page = await browser.newPage();
    await page.goto('https://www5.ipg-online.com/vt/login');

    await browser.close();
}

openWebPage();