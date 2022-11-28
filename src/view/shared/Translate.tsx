export default class Translate {
  static Trans(item) {
    console.log(item);

    const langue = localStorage.getItem("language");

    console.log(langue);
    // var title = ["titleFR", "titleEN", "titleAR"];
    // var description = ["descriptionFR", "descriptionEN", "descriptionAR"];
    // if (item.includes(title)) {
    //   console.log("the item is title");
    // } else if (item.includes(description)) {
    //   console.log("the item is description");
    // }

    // switch (langue) {
    //   case "fr":
    //     return item.titleFR;
    //   case "en":
    //     return item.titleEN;
    //   case "ar":
    //     return item.titleAR;
    //   default:
    //     return item.titleAR;
    // }
    // switch (langue) {
    //   case "fr":
    //     return item.descriptionFR;
    //   case "en":
    //     return item.descriptionEN;
    //   case "ar":
    //     return item.descriptionAR;
    //   default:
    //     return item.titleAR;
    // }
  }
}
