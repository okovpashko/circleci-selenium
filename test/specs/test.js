'use strict';

describe('Simple test', () => {
  it('check page title', async () => {
   await  browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    expect(title).toBe('WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});