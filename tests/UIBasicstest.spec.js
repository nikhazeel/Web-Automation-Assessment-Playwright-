const {test, expect} = require('@playwright/test');

test('Practice Software Testing',async ({page})=>
{
    await page.goto("https://practicesoftwaretesting.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    await page.locator('a[href="/auth/login"]').click();
    await page.locator('#email').fill("customer@practicesoftwaretesting.com");
    await page.locator('#password').fill("welcome01");
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('#menu')).toHaveText('Jane Doe'); // Verify logged-in user

}); 

