const wordpressStart = require("./chores/wordpress_start");
const checkout = require("./chores/checkout");
const wordpressFinish = require("./chores/wordpress_finish");

async function index(domain, username, password, email) {
    await wordpressStart.wordpressStart(domain, username, password, email);
    await checkout.checkout(domain, username, password, email);
    await wordpressFinish.wordpressFinish(domain, username, password, email);
}



module.exports = { index };

