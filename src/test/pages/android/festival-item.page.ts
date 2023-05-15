export default class FestivalItem {
  container: WebdriverIO.Element;

  constructor(container: WebdriverIO.Element) {
    this.container = container;
  }

  async festivalName(): Promise<string> {
    return await this.container
      .$("id=com.energyaustralia.codingtestsample:id/festivalTextView")
      .getText();
  }

  async festivalTitle(): Promise<string> {
    return await this.container
      .$("id=com.energyaustralia.codingtestsample:id/titleTextView")
      .getText();
  }
}