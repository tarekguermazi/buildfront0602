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
    if (field === "title" && data?.titleFR) {
      title = data.titleFR;
    }
    if (field === "description" && data?.descriptionFR) {
      title = data.descriptionFR;
    }

    return title;
  }
  static TransLateAR(field?, data?) {
    let title = " ";
    if (field === "title" && data?.titleAR) {
      title = data.titleAR;
    }
    if (field === "description" && data?.descriptionAR) {
      title = data.descriptionAR;
    }

    return title;
  }
  static TransLateEN(field?, data?) {
    let title = " ";
    if (field === "title" && data?.titleEN) {
      title = data.titleEN;
    }
    if (field === "description" && data?.descriptionEN) {
      title = data.descriptionEN;
    }

    return title;
  }

  static TransEmplacement(item?) {
    let emplacement = "";
    const Currentlangue = localStorage.getItem("language");
    if (Currentlangue === "fr") {
      emplacement = this.TransEmplacementFR(item);
    }
    if (Currentlangue === "ar") {
      emplacement = this.TransEmplacementAR(item);
    }

    if (Currentlangue === "en") {
      emplacement = this.TransEmplacementEN(item);
    }
    return emplacement;
  }

  static TransEmplacementFR(data?) {
    let emplacement = " ";
    if (data?.emplacementFR) {
      emplacement = data.emplacementFR;
    }

    return emplacement;
  }
  static TransEmplacementAR(data?) {
    let emplacement = " ";
    if (data?.emplacementAR) {
      emplacement = data.emplacementAR;
    }
    return emplacement;
  }
  static TransEmplacementEN(data?) {
    let emplacement = " ";
    if (data?.emplacementEN) {
      emplacement = data.emplacementEN;
    }

    return emplacement;
  }

  static TransLink(item?) {
    let link = "";

    const Currentlangue = localStorage.getItem("language");
    if (Currentlangue === "fr") {
      link = item?.linkFR;
    }
    if (Currentlangue === "ar") {
      link = item?.linkAR;
    }

    return link;
  }
}
