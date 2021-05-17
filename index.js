const { chromium } =  require('playwright');

async function search(){
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
}