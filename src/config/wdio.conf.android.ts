import { config as wdioConfig } from "./wdio.shared.conf.ts";
import { join } from 'path';

export const config: WebdriverIO.Config = {
  ...wdioConfig,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  specs: ["../test/specs/android/*.e2e.ts"],
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 6 Pro",
      "appium:platformVersion": "11",
      "appium:automationName": "UiAutomator2",
      "appium:avd": "Pixel_6_Pro",
      "appium:systemPort": 7878,
      "appium:app": join(process.cwd(), 'app', 'RecordLabelApp.apk'),
      "appium:autoGrantPermissions": true,
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:androidInstallTimeout": 60000,
      "appium:newCommandTimeout": 60000,
      "appium:avdLaunchTimeout": 120000,
      "appium:appPackage": "com.energyaustralia.codingtestsample",
      "appium:appActivity": "com.energyaustralia.codingtestsample.MainActivity"
    },
  ],
};