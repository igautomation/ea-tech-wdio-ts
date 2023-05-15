import { config as baseConfig } from "./wdio.shared.conf.ts";
import path from "node:path";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  port: 4725,
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: ["../test/specs/ios/*.e2e.ts"],
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 14",
      "appium:platformVersion": "16.4",
      "appium:automationName": "XCuiTest",
      "appium:app": path.join(process.cwd(), "/apps/RecordLabelApp.app"),
      "appium:autoAcceptAlerts": true,
      "appium:fullReset": false,
    },
  ],
};
