let page;
async function openPage(url) {
  page = await browser.newPage();
  await page.goto(url);
  return page;
}
beforeEach(async () => {
  page=await openPage("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    jest.setTimeout(10000)
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1',{timeout:5000});
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    jest.setTimeout(10000)
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(10000)
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true, timeout:3000
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

test("Check title home page'", async () => {
  const newPage = await openPage("https://github.com");
  jest.setTimeout(10000)
  await newPage.waitForSelector('h1',{timeout:3000});
  const actual = await newPage.$eval("h1", elem => elem.textContent);
  expect(actual).toEqual("Search code, repositories, users, issues, pull requests...");
  await newPage.close();
});

test("Check title price page'", async () => {
  const newPage = await openPage("https://github.com/pricing");
  jest.setTimeout(10000)
  await newPage.waitForSelector('h1',{timeout:3000});
  const actual = await newPage.$eval("h1", elem => elem.textContent);
  expect(actual).toEqual("Search code, repositories, users, issues, pull requests...");
  await newPage.close();
});

test("Check title explore page'", async () => {
  const newPage = await openPage("https://github.com/explore");
  jest.setTimeout(10000)
  await newPage.waitForSelector('h1',{timeout:3000});
  const actual = await newPage.$eval("h1", elem => elem.textContent);
  expect(actual).toEqual("Search code, repositories, users, issues, pull requests...");
  await newPage.close();
});
