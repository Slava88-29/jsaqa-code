const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");
const { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(45000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  await this.browser.close();
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 45000,
  });
});

When("user choose next day", async function () {
  await clickElement(this.page, "body > nav > a:nth-child(2)");
});

When("user choose time", async function () {
    await clickElement(
      this.page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
});

When(
  "user select row {int} and seat {int}",
  async function (rowNumber, placeNumber) {
    const placeNumberSelector =
      "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(" +
      rowNumber +
      ") > span:nth-child(" +
      placeNumber +
      ")";
    await clickElement(this.page, placeNumberSelector);
  }
);

When("user click button", async function () {
  await clickElement(this.page, "button.acceptin-button");
  await clickElement(this.page, "button.acceptin-button");
});

When(
  "user select row2 {int} and seat2 {int}",
  async function (rowNumber2, placeNumber2) {
    const placeNumberSelector =
      "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(" +
      rowNumber2 +
      ") > span:nth-child(" +
      placeNumber2 +
      ")";
    await clickElement(this.page, placeNumberSelector);
  }
);

When("user select the booked place", async function () {
  await clickElement(
    this.page,
    "span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken"
  );
});

Then("user see {string}", async function (successMsg) {
  const actual = await getText(
    this.page,
    "body > main > section > div > p:nth-child(7)"
  );
  expect(actual).contain(successMsg
  );
});

Then("user see button disabled {string}", async function (isDisable) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  expect(actual).contains(isDisable);
});
