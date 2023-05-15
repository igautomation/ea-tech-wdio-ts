import FestivalItem from "./festival-item.page.ts";

class FestivalPage {
  async listView() {
    return await $("id=festival_list");
  }
  async festivals() {
    return (await this.listView())
      .$$("android.widget.LinearLayout")
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
