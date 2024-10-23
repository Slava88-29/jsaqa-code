let page;

async function openPage(url) {

  page = await browser.newPage();

  await page.goto(url);

  return page;

}



describe("Github page tests", () => {

  beforeEach(async () => {

    page = await openPage("https://github.com/team");

  });



  afterEach(() => {

    page.close();

  });



  test("The h1 header content'", async () => {

    const firstLink = await page.$("header div div a");

    await firstLink.click();

    await page.waitForSelector('h1');

    const title2 = await page.title();

    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');

  }, 10000);



  test("The first link attribute", async () => {

    const actual = await page.$eval("a", link => link.getAttribute('href'));

    expect(actual).toEqual("#start-of-content");

  }, 10000);



  test("The page contains Sign in button", async () => {

    const btnSelector = ".btn-large-mktg.btn-mktg";

    await page.waitForSelector(btnSelector, {

      visible: true

    });

    const actual = await page.$eval(btnSelector, link => link.textContent);

    expect(actual).toContain("Get started with Team")

  });

}, 10000);



test("Check title home page'", async () => {

  const newPage = await openPage("https://github.com");

  await newPage.waitForSelector('h1');

  const title2 = await page.title();

  expect(title2).toEqual("GitHub: Let’s build from here · GitHub");

  await newPage.close();

}, 10000);



test("Check title price page'", async () => {

  const newPage = await openPage("https://github.com/pricing");

  await newPage.waitForSelector('h1');

  const title2 = await page.title();

  expect(title2).toEqual("Pricing · Plans for every developer · GitHub");

  await newPage.close();

}, 10000);



test("Check title features page'", async () => {

  const newPage = await openPage("https://github.com/features");

  await newPage.waitForSelector('h1');

  const title2 = await page.title();

  expect(title2).toEqual("GitHub Features · GitHub");

  await newPage.close();

}, 10000);