# Playwright E2E Testing Project

A production-ready end-to-end testing setup using Playwright with TypeScript and GitHub Actions CI/CD pipeline.

## 📋 Overview

This project demonstrates best practices for setting up automated E2E testing with:
- **Playwright Test** framework
- **TypeScript** for type-safe test code
- **GitHub Actions** for automated CI/CD
- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **HTML reporting** for test results
- **Parallel test execution** for faster runs

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository** (if not already cloned)
   ```bash
   git clone <your-repo-url>
   cd "Pipeline and automation"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

   This will download Chromium, Firefox, and WebKit browsers needed for testing.

## 🧪 Running Tests Locally

### Run all tests (headless mode)
```bash
npm run test:e2e
```

This will run all tests across all configured browsers (Chromium, Firefox, WebKit) in headless mode.

### Run tests with visible browser (headed mode)
```bash
npm run test:headed
```

Useful for debugging - you'll see the browser window and can watch the tests execute.

### Run tests for a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/example.spec.ts
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

Opens the Playwright Inspector for step-by-step debugging.

## 📊 Viewing Test Reports

After running tests, view the HTML report:

```bash
npm run report
```

This opens an interactive HTML report in your browser showing:
- Test results and status
- Screenshots (on failure)
- Traces (on retry)
- Detailed test execution logs

## 🔄 GitHub Actions CI/CD

### Automatic Test Execution

The project includes a GitHub Actions workflow that automatically runs tests when code is pushed to the `master` branch.

**Workflow Details:**
- **Trigger:** Push to `master` branch (after merge)
- **Runners:** Ubuntu-latest
- **Node Version:** 18.x
- **Browser Matrix:** Tests run in parallel across Chromium and Firefox
- **Caching:** Node modules are cached to speed up builds
- **Environment Variables:** `BASE_URL` can be configured

### Workflow Steps

1. Checkout code
2. Setup Node.js 18
3. Cache node_modules for faster builds
4. Install dependencies with `npm ci`
5. Install Playwright browsers with dependencies
6. Run E2E tests for each browser (parallel jobs)
7. Upload HTML report as artifact (even if tests fail)

### Accessing Test Reports in GitHub Actions

1. Navigate to your repository on GitHub
2. Click on the **Actions** tab
3. Select the workflow run you want to inspect
4. Scroll down to the **Artifacts** section
5. Download the `playwright-report-chromium` or `playwright-report-firefox` artifact
6. Extract the ZIP file and open `index.html` in your browser

The reports are retained for 30 days by default.

### Workflow Configuration

The workflow is configured to:
- ✅ Run only on pushes to `master` (not on PRs to master)
- ✅ Use matrix strategy for testing multiple browsers in parallel
- ✅ Cache dependencies to reduce build time
- ✅ Fail the job if tests fail (ensures CI catches issues)
- ✅ Always upload test reports (even on failure)

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── e2e.yml           # GitHub Actions CI workflow
├── tests/
│   └── example.spec.ts       # E2E test specifications
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
├── playwright.config.ts      # Playwright configuration
├── README.md                 # This file
└── tsconfig.json             # TypeScript configuration
```

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.ts` file includes:
- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled for faster test runs
- **Retries:** 1 retry on failure (helps with flaky tests)
- **Reporter:** HTML (rich visual reports)
- **Headless Mode:** Enabled by default
- **Screenshots:** Captured only on failure
- **Trace:** Captured on first retry (for debugging)
- **Base URL:** Configurable via `BASE_URL` environment variable

### Browser Projects

Three browser projects are configured:
- **Chromium** (Google Chrome)
- **Firefox**
- **WebKit** (Safari)

Tests run on all three browsers locally. In CI, only Chromium and Firefox are used to balance coverage and execution time.

## 📝 Writing Tests

Tests are located in the `tests/` directory. Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something specific', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

### Best Practices

- Use descriptive test names
- Group related tests using `test.describe()`
- Use Playwright's built-in assertions (`expect`)
- Leverage page object models for complex applications
- Keep tests independent and isolated
- Use data-testid attributes for reliable selectors

## 🐛 Debugging Tips

1. **Visual debugging:** Use `npm run test:headed` to watch tests
2. **Inspector:** Use `npx playwright test --debug` for step-by-step debugging
3. **Screenshots:** Automatically captured on failure
4. **Traces:** Available in HTML report for failed/retried tests
5. **Console logs:** Visible in terminal output during test runs

## 🔄 Continuous Integration

### When Tests Run

- ✅ Automatically on every push to `master` branch
- ✅ After pull requests are merged to `master`
- ❌ Not on pull request commits (update workflow if needed)

### Viewing CI Results

Check the status badge or GitHub Actions tab for test results. Failed tests will block the build and prevent deployment.

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Create a feature branch from `master`
2. Add or modify tests as needed
3. Run tests locally to ensure they pass
4. Commit your changes
5. Push to your branch and create a pull request
6. Tests will run automatically after merge to `master`

## 📄 License

MIT
