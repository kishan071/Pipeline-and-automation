# Advanced CI/CD Pipeline with Playwright E2E Testing

[![CI/CD Pipeline](https://github.com/kishan071/Pipeline-and-automation/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kishan071/Pipeline-and-automation/actions/workflows/ci-cd.yml)

A production-ready, multi-stage CI/CD pipeline demonstrating best practices for automated testing, security scanning, performance monitoring, and deployment.

## 📋 Overview

This project showcases an **advanced 7-stage CI/CD pipeline** with:
- **🎯 Parallel Execution** - Lint and Unit Tests run simultaneously
- **✅ Code Quality** - ESLint, Prettier, TypeScript checks
- **🧪 Unit Testing** - Jest with coverage reporting
- **🔨 Build Process** - Automated build and artifact management
- **🔒 Security Scanning** - npm audit vulnerability checks
- **⚡ Performance Testing** - Lighthouse CI with performance budgets
- **🚀 Automated Deployment** - GitHub Pages deployment on success
- **🎭 E2E Testing** - Playwright tests on the live deployed site

## 🏗️ Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Stage 1 & 2 (Parallel)                                      │
│  ├─ 1️⃣ Lint & Code Quality (ESLint, Prettier, TypeScript)   │
│  └─ 2️⃣ Unit Tests (Jest with Coverage)                       │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Stage 3                                                      │
│  └─ 3️⃣ Build Application (Compile & Bundle)                  │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Stage 4                                                      │
│  └─ 4️⃣ Security Scan (npm audit)                             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Stage 5                                                      │
│  └─ 5️⃣ Performance Test (Lighthouse CI)                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼ (master branch only)
┌─────────────────────────────────────────────────────────────┐
│  Stage 6                                                      │
│  └─ 6️⃣ Deploy to GitHub Pages                                │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼ (master branch only)
┌─────────────────────────────────────────────────────────────┐
│  Stage 7                                                      │
│  └─ 7️⃣ E2E Tests on Deployed Site (Playwright)               │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kishan071/Pipeline-and-automation.git
   cd "Pipeline and automation"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps chromium
   ```

## 🧪 Running Tests & Scripts Locally

### Code Quality & Linting
```bash
# Run ESLint
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# TypeScript type checking
npm run type-check
```

### Unit Tests
```bash
# Run unit tests
npm run test:unit

# Run unit tests with coverage
npm run test:unit:coverage
```

### E2E Tests
```bash
# Run E2E tests (headless)
npm run test:e2e

# Run tests with visible browser
npm run test:headed

# Run all tests (unit + E2E)
npm run test:all

# Debug E2E tests
npx playwright test --debug
```

### Build & Deploy
```bash
# Build application
npm run build

# View Playwright test report
npm run report
```

## 📊 Reports & Artifacts

The pipeline generates multiple types of reports:

### Test Reports
- **Unit Test Coverage** - Generated in `coverage/` directory
- **E2E Test Reports** - Playwright HTML report in `playwright-report/`
- **Test Results** - Detailed results in `test-results/`

### View Reports Locally
```bash
# Playwright E2E report
npm run report

# Coverage report
open coverage/lcov-report/index.html  # Mac/Linux
start coverage/lcov-report/index.html  # Windows
```

### CI Artifacts
All reports are uploaded as GitHub Actions artifacts with 30-day retention:
- Coverage reports
- E2E test results
- Security audit reports
- Lighthouse performance reports

## 🔄 CI/CD Pipeline Details

### Pipeline Stages

#### 1️⃣ Lint & Code Quality (Parallel)
- ESLint for code quality
- Prettier for consistent formatting
- TypeScript type checking
- **Runs in parallel with Unit Tests**

#### 2️⃣ Unit Tests (Parallel)
- Jest unit tests with TypeScript
- Code coverage collection
- Coverage report upload
- **Runs in parallel with Lint & Code Quality**

#### 3️⃣ Build Application
- Builds static site from source
- Creates deployment artifacts
- **Depends on:** Stages 1 & 2

#### 4️⃣ Security Scan
- npm audit for vulnerabilities
- Fails on high/critical issues
- Security report upload
- **Depends on:** Stage 3

#### 5️⃣ Performance Test
- Lighthouse CI audits
- Performance budgets:
  - Performance Score: 80+
  - Accessibility Score: 80+
  - Best Practices Score: 80+
  - SEO Score: 80+
- **Depends on:** Stage 4

#### 6️⃣ Deploy to GitHub Pages
- Deploys to GitHub Pages
- **Only runs on:** master branch
- **Only runs on:** push events (not PRs)
- **Depends on:** Stage 5 (all previous stages must pass)
- **Outputs:** Deployment URL

#### 7️⃣ E2E Tests on Deployed Site
- Playwright tests on Chromium
- **Tests the actual deployed site**
- Screenshot on failure
- Traces on retry
- 30-second wait for deployment to be ready
- **Only runs on:** master branch (after deployment)
- **Only runs on:** push events (not PRs)
- **Depends on:** Stage 6 (deployment)
- **Uses:** Live deployment URL from Stage 6

### Workflow Triggers
- **Push to master:** Full pipeline + deployment
- **Pull Request:** Full pipeline (no deployment)

### Pipeline Configuration
- **Runners:** ubuntu-latest
- **Node Version:** 18.x
- **Concurrency:** Automatically managed
- **Artifact Retention:** 30 days for reports, 7 days for builds

## 🛠️ Technology Stack

### Testing & Quality
- **Playwright** - E2E testing framework
- **Jest** - Unit testing framework
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type-safe development

### CI/CD & DevOps
- **GitHub Actions** - CI/CD automation
- **Lighthouse CI** - Performance testing
- **npm audit** - Security vulnerability scanning
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
Pipeline-and-automation/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml          # Main CI/CD pipeline (7 stages)
│       └── e2e.yml             # Legacy E2E-only workflow
├── src/
│   ├── static/
│   │   ├── index.html         # Main website
│   │   └── styles.css         # Styles
│   └── utils.ts               # Utility functions
├── tests/
│   ├── unit/
│   │   └── utils.test.ts      # Unit tests
│   └── example.spec.ts        # E2E tests
├── public/                     # Build output (generated)
├── coverage/                   # Test coverage reports (generated)
├── playwright-report/          # E2E test reports (generated)
├── test-results/               # Test artifacts (generated)
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── jest.config.ts             # Jest configuration
├── playwright.config.ts       # Playwright configuration
├── .lighthouserc.json         # Lighthouse CI configuration
├── tsconfig.json              # TypeScript configuration
├── build.js                   # Build script
└── package.json               # Dependencies & scripts
```

## ⚙️ Configuration Files

### ESLint (`.eslintrc.json`)
- TypeScript-aware linting
- Playwright plugin for test files
- Prettier integration
- Custom rules for test files

### Prettier (`.prettierrc`)
- Consistent code formatting
- 100 character line width
- Single quotes, semicolons
- 2-space indentation

### Jest (`jest.config.ts`)
- TypeScript support via ts-jest
- Coverage thresholds: 70% across all metrics
- Unit tests in `tests/unit/`

### Playwright (`playwright.config.ts`)
- Multi-browser support (Chromium, Firefox, WebKit)
- Parallel test execution
- Retry on CI (1 retry)
- Screenshots on failure
- Traces on retry

### Lighthouse CI (`.lighthouserc.json`)
- Desktop preset
- 3 runs for consistency
- Performance budgets (80+ scores)
- Core Web Vitals monitoring

## 🔧 Setup GitHub Pages Deployment

To enable GitHub Pages deployment:

1. **Navigate to Repository Settings**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**

2. **Configure Source**
   - Under **Build and deployment**
   - Source: **GitHub Actions**
   - Save the settings

3. **Enable Workflow Permissions**
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Save

4. **Push to Master**
   - The pipeline will automatically deploy on successful runs

5. **Access Your Site**
   - URL: `https://kishan071.github.io/Pipeline-and-automation/`

## 🐛 Troubleshooting

### Pipeline Failures

#### Lint Stage Fails
```bash
# Run locally to see issues
npm run lint

# Auto-fix most issues
npm run lint:fix

# Format code
npm run format
```

#### Unit Tests Fail
```bash
# Run tests locally
npm run test:unit

# Run with coverage to see what's missing
npm run test:unit:coverage
```

#### E2E Tests Fail
```bash
# Run tests in headed mode to see what's happening
npm run test:headed

# Debug specific test
npx playwright test --debug

# Update snapshots if needed
npx playwright test --update-snapshots
```

#### Security Scan Fails
```bash
# Run audit locally
npm audit

# Fix vulnerabilities automatically
npm audit fix

# For breaking changes, manually update packages
```

#### Performance Test Fails
- Check Lighthouse reports in CI artifacts
- Review performance budgets in `.lighthouserc.json`
- Optimize images, CSS, and JavaScript
- Consider adjusting thresholds if necessary

#### Deployment Fails
- Verify GitHub Pages is enabled in repository settings
- Check workflow permissions (needs write access)
- Ensure `public/` directory exists after build
- Review deployment logs in GitHub Actions

### Common Issues

**Issue:** `ENOENT: no such file or directory`
- **Solution:** Run `npm install` to ensure all dependencies are installed

**Issue:** Playwright browsers not found
- **Solution:** Run `npx playwright install --with-deps`

**Issue:** Tests pass locally but fail in CI
- **Solution:** Check for environment-specific code, timing issues, or missing CI environment variables

**Issue:** Memory issues in CI
- **Solution:** Reduce parallel workers in `playwright.config.ts` for CI environment

## 📈 Performance Metrics

The pipeline tracks the following metrics:

### Code Coverage
- **Target:** 70% minimum across all metrics
- **Tracked:** Branches, Functions, Lines, Statements

### Lighthouse Scores (Minimum 80/100)
- **Performance** - Load time and responsiveness
- **Accessibility** - WCAG compliance
- **Best Practices** - Security and modern standards
- **SEO** - Search engine optimization

### Core Web Vitals
- **First Contentful Paint (FCP):** < 2s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 300ms
- **Speed Index:** < 3s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run all checks locally:
   ```bash
   npm run lint
   npm run format
   npm run type-check
   npm run test:all
   npm run build
   ```
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - End-to-end testing
- [Jest](https://jestjs.io/) - Unit testing
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Performance testing
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

---

Built with ❤️ by [kishan071](https://github.com/kishan071)

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
