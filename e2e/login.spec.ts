import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('practice', 'SuperSecretPassword!');
        
        await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
    });
    test('Login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid_user', 'invalid_password');
        await expect(page).toHaveURL('https://practice.expandtesting.com/login');
    });
});

