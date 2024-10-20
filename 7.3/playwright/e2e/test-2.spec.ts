import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('example@mail.com');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('1234567');
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByTestId('login-error-hint')).toBeVisible();
  await expect(page.getByTestId('login-error-hint')).toContainText('Вы ввели неправильно логин или пароль.');
});