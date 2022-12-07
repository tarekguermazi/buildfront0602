export default class Translate {
  static Trans(field?, item?) {
    let title = "";
    const Currentlangue = localStorage.getItem("language");
    if (Currentlangue === "fr") {
      title = this.TransLateFR(field, item);
    }
    if (Currentlangue === "ar") {
      title = this.TransLateAR(field, item);
    }

    if (Currentlangue === "en") {
      title = this.TransLateEN(field, item);
    }
    return title;
  }
  static TransLateFR(field?, data?) {
    let title = " ";
    if (field === "title") {
      title = data.titleFR;
    }
    if (field === "description") {
      title = data.descriptionFR;
    }

    return title;
  }
  static TransLateAR(field?, data?) {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    let title = " ";
    if (field === "title") {
      title = data.titleAR;
    }
    if (field === "description") {
      title = data.descriptionAR;
    }

    return title;
  }
  static TransLateEN(field?, data?) {
    let title = " ";
    if (field === "title") {
      title = data.titleEN;
    }
    if (field === "description") {
      title = data.descriptionEN;
    }

    return title;
  }
}
