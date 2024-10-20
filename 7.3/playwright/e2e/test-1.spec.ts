import { test, expect } from '@playwright/test';
import { email, password } from "../user";
test('test', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL(new RegExp("https://netology.ru/profile/*"));
  const h=await page.locator('h2').first();
  await expect(h).toHaveText("Моё обучение");
});


