const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru");
});

afterEach(() => {
    page.close();
});

test("One seat order test", async () => {
    await clickElement(page,"body > nav > a:nth-child(2)")
    await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)")
    await clickElement(page, "body > main > section > button")
    await clickElement(page, "body > main > section > div > button")
    const actual = await getText(page, "body > main > section > div > p:nth-child(7)")
    expect (actual).contain("Покажите QR-код нашему контроллеру для подтверждения бронирования.")
    const actual_seat = await getText(page, "body > main > section > div > p:nth-child(2) > span")
    expect (actual_seat).contain("4/5")

}); 
    

test("Some seat order test", async () => {
    await clickElement(page,"body > nav > a:nth-child(2)")
    await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(6)")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(7)")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(8)")
    await clickElement(page, "body > main > section > button")
    await clickElement(page, "body > main > section > div > button")
    const actual = await getText(page, "body > main > section > div > p:nth-child(7)")
    expect (actual).contain("Покажите QR-код нашему контроллеру для подтверждения бронирования.")
    const actual_seat = await getText(page, "body > main > section > div > p:nth-child(2) > span")
    expect (actual_seat).contain("4/6")
    expect (actual_seat).contain("4/7")
    expect (actual_seat).contain("4/8")
});

test("Reserved seat order test", async () => {
    await clickElement(page,"body > nav > a:nth-child(2)")
    await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a")
    const seat= await page.$ ("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)")
    expect(seat.disabled).equal(true)
    const button = await page.$ ("body > main > section > button")
    expect(button.disabled).equal(true)
   
});