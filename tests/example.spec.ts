import { test, expect } from '@playwright/test';

test.describe('Example.com E2E Tests', () => {
  test('should navigate to example.com and verify content', async ({ page }) => {
    // Navigate to the example.com website
    await page.goto('https://example.com');

    // Verify the page title contains "Example"
    await expect(page).toHaveTitle(/Example/);

    // Verify the h1 text is "Example Domain"
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('Example Domain');
  });

  test('should verify page has more information link', async ({ page }) => {
    // Navigate to the example.com website
    await page.goto('https://example.com');

    // Verify the "More information" link is visible
    const moreInfoLink = page.locator('a:has-text("More information")');
    await expect(moreInfoLink).toBeVisible();
    
    // Verify the link has the correct href
    await expect(moreInfoLink).toHaveAttribute('href', 'https://www.iana.org/domains/example');
  });
});
