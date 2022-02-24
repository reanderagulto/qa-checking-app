const {Builder, By} = require("selenium-webdriver");
const {google} = require("googleapis");
const config = require("../../../../config");

const auth = config.auth;
const spreadsheetId = config.spreadsheetId;
const form_page = config.forms.indinspect.form1;


async function webforms(domain) {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client })

    let driver = await new Builder().forBrowser("chrome").build();

    // form fill in
    try {
        await driver.get(domain + form_page);
        await driver.findElement(By.id("input_1_1_3")).sendKeys("Primeview");
        await driver.findElement(By.id("input_1_1_6")).sendKeys("Test");
        await driver.findElement(By.id("input_1_2")).sendKeys("qa@primeview.com");
        await driver.findElement(By.id("input_1_3")).sendKeys("4806480839");
        await driver.findElement(By.id("input_1_4")).sendKeys("Please take note that this is a test submit form for Contact Us. Please disregard if received. Thank you.");
        await driver.executeScript("return document.getElementsByClassName('gform_button button')[0].click()");
    } catch (error) {
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
            range: "Industrial Inspection & Consulting!I2",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [ty_url]
                ]
            }
        });
        console.log("success.");
    } catch (error) {
        console.log(error);
    }

    return true;

}



module.exports = { webforms };
