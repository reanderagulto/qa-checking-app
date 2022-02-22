const app = require('express')();
const {Builder, By} = require("selenium-webdriver");
const config = require("../responsiveness/config");

const lambdatest_site = config.lambdatest_site;
const lt_email = config.creds_lambdatest.email;
const lt_password = config.creds_lambdatest.password;


// -------------DESKTOP-------------
// Windows 11
async function desktop1(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Windows 8
async function desktop2(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByTagName('li')[114].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Windows 7
async function desktop3(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByTagName('li')[115].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// macOS Sierra 10.12
async function desktop4(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByTagName('li')[121].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}


// -------------MOBILE-------------
// Samsung Galaxy M30s
async function android1(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Google Pixel 5
async function android2(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[197].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// OnePlus 9
async function android3(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[198].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Xiaomi Mi 11
async function android4(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[199].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Realme 5
async function android5(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[200].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Huawei P30 Pro
async function android6(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[201].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Sony Xperia xz2
async function android7(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[202].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Moto G6
async function android8(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[203].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// LG G6
async function android9(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[204].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// iPhone 13 Pro Max
async function ios1(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByClassName('fa fa-apple')[7].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// iPhone X
async function ios2(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByClassName('fa fa-apple')[7].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[154].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}


// -------------TABLET-------------
// iPad Air (4th generation)
async function tablet1(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[136].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[138].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Galaxy Tab S7 Plus
async function tablet2(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[215].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}

// Galaxy Tab S6
async function tablet3(url, email, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(lambdatest_site);
        if ((email) && (password)) {
            console.log("lambdatest credentials were edited.");
            await driver.findElement(By.id("email")).sendKeys(email);
            await driver.findElement(By.id("password")).sendKeys(password);
        } else {
            console.log("lambdatest credentials were not edited.");
            await driver.findElement(By.id("email")).sendKeys(lt_email);
            await driver.findElement(By.id("password")).sendKeys(lt_password);
        }
        await driver.findElement(By.id("login-button")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("input-text")).sendKeys(url);
        await driver.executeScript("return document.getElementsByClassName('img-responsive center-block')[1].click()");
        await driver.executeScript("return document.getElementsByTagName('li')[247].click()");
        await driver.findElement(By.className("btn-start")).click();
    } catch (error) {
        console.log(error);
    }
}


module.exports = { 
    desktop1, 
    desktop2, 
    desktop3, 
    desktop4, 
    android1, 
    android2, 
    android3, 
    android4, 
    android5, 
    android6, 
    android7, 
    android8, 
    android9, 
    ios1, 
    ios2,
    tablet1,
    tablet2,
    tablet3
};

    