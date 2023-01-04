import { i18n } from "src/i18n";

class Roles {
  static get values() {
    return {
      Super_admin: "Super_admin",
      admin_OST: "admin_OST",
      createur_OST: "createur_OST",
      admin_Migration: "admin_Migration",
      createur_Migration: "createur_Migration",
      createur_Contenu: "createur_Contenu",
      createur_thématique: "createur_thématique",
      createur_région: "createur_région",
      admin: "admin",
      journalist: "journalist",
      chercheur: "chercheur",
      acteur_social: "acteur_social",
      civile_ONG_international: "civile_ONG_international",
      politique: "politique",
      independant: "independant",
      decideur: "decideur",
      mobile: "mobile",
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
