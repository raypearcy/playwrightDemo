import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/login-page';

const username = process.env.USER_NAME!;
const userpassword = process.env.USER_PASSWORD!;

test('standard user can login and arrive at the products page', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(username, userpassword);
    await expect(page.url()).toContain('/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});