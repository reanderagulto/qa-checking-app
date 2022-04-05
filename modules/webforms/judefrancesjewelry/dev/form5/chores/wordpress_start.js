const {Builder, By, Key} = require("selenium-webdriver");
const {google} = require("googleapis");
const config = require("../../../../config");
const logger = require('../../../../../../middleware/logger.js');
const server = require('../../../../../../server.js');
const sheet = require('../../../../../../middleware/gsheet.js');

const wp_username = config.credentials.judefrancesjewelry.username;
const wp_password = config.credentials.judefrancesjewelry.password;
const qa_email = config.qa_email;
const auth = config.auth;
const spreadsheetId = config.spreadsheetId;
const date = config.date;
const form_page = config.forms.judefrancesjewelry.form5;
const module_name = config.module_name;
const launch = config.launch.dev;
const form = config.webforms.judefrancesjewelry.dev.form5;


async function wordpressStart(domain, checkbox, username, password, email, timestamp) {
    const wp_site = domain + "wp-admin";
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client })   

    let requests = [{
        insertRange: {
            range: {
                sheetId: 1676737950,
                startRowIndex: 1,
                endRowIndex: 4,
                startColumnIndex: 0,
            },
            shiftDimension: "ROWS"
        }
    }];   
    
    const batchUpdateRequest = {requests};
    
    // add columns
    try {
        await googleSheets.spreadsheets.batchUpdate({
            auth,
            spreadsheetId,
            resource: batchUpdateRequest
        });
        logger.logger.log({ level: 'info', message: 'WEBFORMS - add columns success.', tester: server.userId });
        console.log("WEBFORMS - add columns success.");
        value = [ "", "info", "add columns success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: 'WEBFORMS - add columns failed.', tester: server.userId });
        console.log("WEBFORMS - add columns failed.");
        value = [ "", "error", "add columns failed.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    let ranges = [
        "Jude Frances Jewelry!A2",
        "Jude Frances Jewelry!B2",
        "Jude Frances Jewelry!C2",
        "Jude Frances Jewelry!C3",
        "Jude Frances Jewelry!D2",
        "Jude Frances Jewelry!E2",
        "Jude Frances Jewelry!G2",
    ]

    let values = [
        "Pre-launch",
        date,
        wp_username,
        wp_password,
        domain + form_page,
        "General Questions",
        'gform_5',
    ]

    // track form details
    try {
        for (let index = 0; index < ranges.length; index++) {
            await googleSheets.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range: ranges[index],
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [
                        [values[index]]
                    ]
                }
            });
        }
        logger.logger.log({ level: 'info', message: 'WEBFORMS - track details success.', tester: server.userId });
        console.log("WEBFORMS - track details success.");
        value = [ "", "info", "track details success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: 'WEBFORMS - track details failed.', tester: server.userId });
        console.log("WEBFORMS - track details failed.");
        value = [ "", "error", "track details failed.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(wp_site);

    // wp login
    try {
        if ((username) && (password)) {
            await driver.findElement(By.name("log")).sendKeys(username);
            await driver.findElement(By.name("pwd")).sendKeys(password);
            logger.logger.log({ level: 'info', message: 'WEBFORMS - edit credentials success.', tester: server.userId });
            console.log("WEBFORMS - edit credentials success.");
            value = [ "", "info", "edit credentials success.", server.userId, timestamp, module_name, domain, username + "\n" + password, "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        } else {
            await driver.findElement(By.name("log")).sendKeys(wp_username);
            await driver.findElement(By.name("pwd")).sendKeys(wp_password);
            logger.logger.log({ level: 'info', message: 'WEBFORMS - same credentials.', tester: server.userId });
            console.log("WEBFORMS - same credentials.");
            value = [ "", "info", "same credentials.", server.userId, timestamp, module_name, domain, wp_username + "\n" + wp_password, "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        }

        await driver.findElement(By.id("wp-submit")).click();

        let login_error = await driver.executeScript("return document.getElementById('login_error')");
        if (login_error) {
            logger.logger.log({ level: 'error', message: 'WEBFORMS - wordpress login failed.', tester: server.userId });
            console.log("WEBFORMS - wordpress login failed.");
            value = [ "", "error", "wordpress login failed.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        } else {
            logger.logger.log({ level: 'info', message: 'WEBFORMS - wordpress login success.', tester: server.userId });
            console.log("WEBFORMS - wordpress login success.");
            value = [ "", "info", "wordpress login success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        }

        var admin_email_verification = await driver.executeScript("return document.querySelector('form').classList.contains('admin-email-confirm-form')");  
        if (admin_email_verification === true) {
            await driver.executeScript("return document.getElementsByTagName('a')[3].click()");
            logger.logger.log({ level: 'info', message: 'WEBFORMS - admin email verification.', tester: server.userId });
            console.log("WEBFORMS - admin email verification.");
            value = [ "", "info", "admin email verification.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        } else {
            logger.logger.log({ level: 'info', message: 'WEBFORMS - no admin email verification.', tester: server.userId });
            console.log("WEBFORMS - no admin email verification.");
            value = [ "", "info", "no admin email verification.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        }
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
        value = [ "", "error", JSON.stringify(error), server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    await driver.executeScript("return document.getElementsByClassName('wp-menu-name')[7].click()");
    await driver.sleep(1000);
    await driver.executeScript("return document.getElementsByTagName('a')[290].click()");

    // get admin notif recipient
    await driver.sleep(1000);
    await driver.executeScript("return document.getElementsByTagName('a')[271].click()");
    await driver.sleep(1000);
    await driver.executeScript("return document.getElementsByTagName('a')[283].click()");

    let recipients = await driver.executeScript("return document.getElementById('toEmail').value");
    console.log("recipients: " + recipients);

    // track form recipients
    try {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Jude Frances Jewelry!H2",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [recipients]
                ]
            }
        });
        logger.logger.log({ level: 'info', message: 'WEBFORMS - track form recipients success.', tester: server.userId });
        console.log("WEBFORMS - track form recipients success.");
        value = [ "", "info", "track form recipients success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
        value = [ "", "error", JSON.stringify(error), server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }
    
    await driver.executeScript("return document.getElementsByClassName('label')[2].click()");

    // change form recipients
    try {
        await driver.executeScript("return document.getElementsByTagName('a')[287].click()");
        await driver.findElement(By.id("toEmail")).sendKeys(Key.CONTROL, "a" + Key.DELETE);
        if (email) {
            await driver.findElement(By.id("toEmail")).sendKeys(email);
            logger.logger.log({ level: 'info', message: 'CHECKOUT - change qa email success.', tester: server.userId });
            console.log("CHECKOUT - change qa email success.");
            value = [ "", "info", "change qa email success.", server.userId, timestamp, module_name, domain, "", "", email, launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);  
        } else {
            await driver.findElement(By.id("toEmail")).sendKeys(qa_email);
            logger.logger.log({ level: 'info', message: 'CHECKOUT - change qa email success.', tester: server.userId });
            console.log("CHECKOUT - same qa email.");
            value = [ "", "info", "same qa email.", server.userId, timestamp, module_name, domain, "", "", qa_email, launch, "", form_page + "\n" + form, "", "" ];
            await sheet.addRow();
            await sheet.appendValues(value);
        }
        await driver.executeScript("return document.getElementsByClassName('primary button large')[0].click()");
        await driver.sleep(1000);
        await driver.executeScript("return document.getElementsByClassName('label')[2].click()");
        logger.logger.log({ level: 'info', message: 'WEBFORMS - change form recipients success.', tester: server.userId });
        console.log("WEBFORMS - change form recipients success.");
        value = [ "", "info", "change form recipients success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
        value = [ "", "error", JSON.stringify(error), server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    // set form email recipients to qa's
    let admin_notif_status = await driver.executeScript("return document.getElementsByClassName('gform-status-indicator-status')[0].innerHTML");
    console.log("admin_notif_status: " + admin_notif_status);

    // set admin notif to inactive
    try {
        if (admin_notif_status === "Active") {
            await driver.executeScript("return document.getElementsByClassName('gform-status-indicator-status')[0].click()");
        }
        logger.logger.log({ level: 'info', message: 'WEBFORMS - set admin notif to inactive success.', tester: server.userId });
        console.log("WEBFORMS - set admin notif to inactive success.");
        value = [ "", "info", "set admin notif to inactive success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
        value = [ "", "error", JSON.stringify(error), server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    let qa_notif_status = await driver.executeScript("return document.getElementsByClassName('gform-status-indicator-status')[1].innerHTML");
    console.log("qa_notif_status: " + qa_notif_status);

    // set qa notif to active
    try {
        if (qa_notif_status === "Inactive") {
            await driver.executeScript("return document.getElementsByClassName('gform-status-indicator-status')[1].click()");
        }
        logger.logger.log({ level: 'info', message: 'WEBFORMS - set qa notif to active success.', tester: server.userId });
        console.log("WEBFORMS - set qa notif to active success.");
        value = [ "", "info", "set qa notif to active success.", server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    } catch (error) {
        logger.logger.log({ level: 'error', message: error, tester: server.userId });
        console.log(error);
        value = [ "", "error", JSON.stringify(error), server.userId, timestamp, module_name, domain, "", "", "", launch, "", form_page + "\n" + form, "", "" ];
        await sheet.addRow();
        await sheet.appendValues(value);
    }

    return true;
    
}


module.exports = { wordpressStart };
