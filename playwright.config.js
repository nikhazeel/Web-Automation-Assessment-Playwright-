// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 *1000,
  expect :{
    timeout: 5000,
  },
  reporter : 'html',
  use: {
   
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on', //off,on https://trace.playwright.dev/
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

 
});
module.exports = config
