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
}); 

test("third test", async({page})=>
    {})