var { Router } = require("express");
var router = Router();
const path = require('path');

router.route('/pantallazo').get(async function (req, res) {
  const { Builder, By } = require("selenium-webdriver");
  let fs = require("fs");

  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.lalvirtual.edu.co");
  let ele = await driver.findElement(By.css("#main-content"));
  // Captures the element screenshot
  let encodedString = await ele.takeScreenshot(true);
  let pathImages = path.join(__dirname, "../public/images");
  await fs.writeFileSync(
    pathImages + "/pantallazo.png",
    encodedString,
    "base64"
  );
  await driver.quit();

  res.send("Hello World!");
});

module.exports = router;
