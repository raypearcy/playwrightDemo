# Playwright Demo

A demo project for end-to-end testing with [Playwright](https://playwright.dev/), using [SauceDemo](https://www.saucedemo.com/) as the test target.

## Prerequisites

- Node.js
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests across all browsers:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

View the HTML report after a test run:

```bash
npx playwright show-report
```

## Project Structure

```
tests/
  login.spec.ts       # Login tests for SauceDemo
playwright.config.ts  # Playwright configuration
```

## Browsers

Tests run against Chromium, Firefox, and WebKit (Safari) by default.

## AI Usage

Claude AI is used in this project for code review, help with some configuration changes, and update documentation only. All test code, page objects, etc are written by the project author.
