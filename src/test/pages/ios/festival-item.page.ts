export default class FestivalItem {
  container: WebdriverIO.Element;

  constructor(container: WebdriverIO.Element) {
    this.container = container;
  }

  async festivalName(): Promise<string> {
    return await this.container
      .$("type == \"XCUIElementTypeStaticText\" AND index == 1")
      .getText();
  }

  async festivalTitle(): Promise<string> {
    return await this.container
      .$("type == \"XCUIElementTypeStaticText\" AND index == 0")
      .getText();
  }
}
