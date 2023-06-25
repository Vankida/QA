const puppeteer = require('puppeteer');

describe('lengthOfLIS function', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('calculates the length of the longest increasing subsequence', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '10,9,2,5,3,7');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 3');
  });


  test('properly returns the longest increasing subsequence', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '10,9,2,5,3,7,101,18');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 4');
  });

  test('test with an empty array', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Error: Please enter comma-separated numbers. e.g: 10,9,2,5,3,7');
  });

  test('test with an array of length 1', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '5');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 1');
  });

  test('test with one or more elements in the input array greater than 10^4', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '5,2,10000000');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Error: invalid input');
  });

  test('test with one or more elements in the input array less than -10^4', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '5,2,-10000000');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Error: invalid input');
  });

  test('test with an array that is already sorted in increasing order', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1,2,3,4,5');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 5');
  });

  test('test with an array that is already sorted in decreasing order', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '5,4,3,2,1');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 1');
  });

  test('test with an array that has repeated elements', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1,2,3,2,4,3,5');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 5');
  });

  test('test with an array that has negative elements', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '-1,2,3,-2,4,-3,5');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el =>el.innerText);
    expect(output).toBe('Output: 5');
  });

  test('test with an array that has only one element repeated multiple times', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1,1,1,1,1,1,1');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 1');
  });

  test('test with an array that has multiple increasing subsequences of the same length', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1,2,4,3,5,4,6');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 5');
  });

  test('test with an array that has a mix of positive and negative values', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '-1,2,6,3,-4,5,-2,7,-3');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 5');
  });

  test('test with an array that has all elements equal to the minimum value allowed by the constraints (i.e., -10^4)', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '-10000,-10000,-10000');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 1');
  });

  test('test with an array that has all elements equal to the maximum value allowed by the constraints (i.e., 10^4)', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '10000,10000,10000');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 1');
  });

  test('test with an array that has alternating positive and negative values', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1,-1,1,-1,1,-1');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Output: 2');
  });


  test('test with an array of strings', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', 'hey,hey,hey,hey');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Error: invalid input, Please enter integers only.');
  });

  test('test with an array of floats', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.type('#input', '1.1,1.1,1.1,1.1');
    await page.click('#submit-button');
    await page.waitForSelector('#output');
    const output = await page.$eval('#output', el => el.innerText);
    expect(output).toBe('Error: invalid input, Please enter integers only.');
  });



  
});