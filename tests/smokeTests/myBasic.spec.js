const {test,expect} = require('@playwright/test')

test('first test', async({browser})=>
{
//playwright code goes here
const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(await page.title()).toBe('Google');
});   
test('second test', async({page})=>
{
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill('snowboard');
    await page.locator('#nav-search-submit-button').click();
    expect({ timeout: 50 * 1000 });
    await page.click('[data-image-index="3"]');
    await page.screenshot({path:'/Users/tejeswaramaddina/Downloads/playwright_automation/myscreenshots/screenshot.png'});
    await page.locator('#add-to-cart-button').click();
    expect({ timeout: 60 * 1000 });
    console.log(await page.textContent('a-size-medium-plus a-color-base sw-atc-text a-text-bold'));
}); 

test("third test", async({page})=>
    {})