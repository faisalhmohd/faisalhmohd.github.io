import { test, expect } from '@playwright/test';

test('production portfolio renders assets and supports section navigation', async ({ page }) => {
  const errors = [];
  const failedLocalRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.url().startsWith('http://127.0.0.1:4174/') && response.status() >= 400) {
      failedLocalRequests.push(response.url());
    }
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Mohammad Faisal', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'github', exact: true })).toHaveAttribute('href', 'https://github.com/faisalhmohd');
  await expect.poll(() => page.evaluate(() => {
    const images = [...document.images].filter(image => new URL(image.src).origin === location.origin);
    return images.length > 0 && images.every(image => image.complete && image.naturalWidth > 0);
  })).toBe(true);

  for (const section of ['portfolio', 'work', 'online', 'chat', 'about']) {
    await page.locator('.navbar-item').filter({ hasText: section }).click();
    await expect.poll(() => page.locator(`.${section}-section`).evaluate(element => {
      const sectionBounds = element.getBoundingClientRect();
      const containerBounds = document.querySelector('.window-inner').getBoundingClientRect();
      return sectionBounds.top < containerBounds.bottom && sectionBounds.bottom > containerBounds.top;
    })).toBe(true);
  }

  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
  expect(failedLocalRequests).toEqual([]);
});
