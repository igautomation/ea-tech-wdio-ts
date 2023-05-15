import FestivalItem from "./festival-item.page.ts";

class FestivalPage {

  async listView() {
    const listView = 'type == \"XCUIElementTypeCollectionView\"';
    return await $(`-ios predicate string:${listView}`);

  }
  async festivals() {
    
    const displayedBandsEle = 'type == XCUIElementTypeCell';
    return (await this.listView())
      .$$(`-ios predicate string:${displayedBandsEle}`)
      .map((e) => new FestivalItem(e));
  }
  async getFestival(name: string, title: string) {
    return (await this.festivals()).filter(async (festival) => {
      (await festival.festivalName()) === name &&
        (await festival.festivalTitle()) === title;
    })[0];
  }
}

export default new FestivalPage();
