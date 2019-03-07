'use strict';

const {remote} = require('webdriverio');

(async () => {
  const browser = await remote({
    logLevel: 'error',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    capabilities: [
      {
        browserName: 'chrome',
        maxInstances: 1,
      },
      {
        browserName: 'firefox',
        maxInstances: 1,
      },
    ],
  });

  await browser.url('https://webdriver.io');

  const title = await browser.getTitle();
  console.log('Title was: ' + title);

  await browser.deleteSession();
})().catch((e) => console.error(e));