const {Builder, By, Key} = require("selenium-webdriver");
const {google} = require("googleapis");
const config = require("../../../../config");
const logger = require('../../../../../../middleware/logger.js');
const server = require('../../../../../../server.js');

const auth = config.auth;
const spreadsheetId = config.spreadsheetId;
const form_page = config.forms.aerialengagement.form1;


async function webforms(domain) {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client })

    let driver = await new Builder().forBrowser("chrome").build();

    // form fill in
    try {
        await driver.get(domain + form_page);
        await driver.findElement(By.name("your-name")).sendKeys("Primeview Test");
        await driver.findElement(By.name("your-email")).sendKeys("qa@primeview.com"); 
        await driver.findElement(By.name("your-address")).sendKeys("7620 E McKellips Rd");
        await driver.findElement(By.name("your-phone")).sendKeys("4806480839");
        await driver.findElement(By.name("your-message")).sendKeys("Please take note that this is a test submit form for Contact Us. Please disregard if received. Thank you.");
        await driver.executeScript("return document.getElementsByClassName('btn-primary')[0].click()");
        logger.logger.log({ level: 'info', message: 'WEBFORMS - form fill in success.', tester: server.userId });
        console.log("WEBFORMS - form fill in success.");
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
    }

    await driver.sleep(5000);

    // track thank you page
    let ty_url = await driver.getCurrentUrl();
    console.log("Form1 thank you page: " + ty_url);

    try {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Aerial Engagement!I2",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [ty_url]
                ]
            }
        });
        logger.logger.log({ level: 'info', message: 'WEBFORMS - track thank you page success.', tester: server.userId });
        console.log("WEBFORMS - track thank you page success.");
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
    }

    return true;

}



module.exports = { webforms };