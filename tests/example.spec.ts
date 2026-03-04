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

  test('should verify page has learn more link', async ({ page }) => {
    // Navigate to the example.com website
    await page.goto('https://example.com');

    // Verify the "Learn more" link is visible
    const learnMoreLink = page.locator('a:has-text("Learn more")');
    await expect(learnMoreLink).toBeVisible();

    // Verify the link has the correct href
    await expect(learnMoreLink).toHaveAttribute('href', 'https://iana.org/domains/example');
  });
});
