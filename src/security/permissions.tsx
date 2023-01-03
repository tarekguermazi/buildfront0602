import Roles from "src/security/roles";
import Plans from "src/security/plans";
import Storage from "src/security/storage";

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tableaudeBoardImport: {
        id: "tableaudeBoardImport",
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tableaudeBoardCreate: {
        id: "tableaudeBoardCreate",
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tableaudeBoardEdit: {
        id: "tableaudeBoardEdit",
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tableaudeBoardDestroy: {
        id: "tableaudeBoardDestroy",
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tableaudeBoardRead: {
        id: "tableaudeBoardRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tableaudeBoardAutocomplete: {
        id: "tableaudeBoardAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tenantEdit: {
        id: "tenantEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tenantDestroy: {
        id: "tenantDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planEdit: {
        id: "planEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planRead: {
        id: "planRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userEdit: {
        id: "userEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userDestroy: {
        id: "userDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userCreate: {
        id: "userCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userImport: {
        id: "userImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userRead: {
        id: "userRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      userAutocomplete: {
        id: "userAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      auditLogRead: {
        id: "auditLogRead",
        allowedRoles: [roles.Super_admin, roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      settingsEdit: {
        id: "settingsEdit",
        allowedRoles: [roles.Super_admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      publicationImport: {
        id: "publicationImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      publicationCreate: {
        id: "publicationCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.publicationSupports],
      },
      publicationEdit: {
        id: "publicationEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.publicationSupports],
      },
      publicationDestroy: {
        id: "publicationDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.publicationSupports],
      },
      publicationRead: {
        id: "publicationRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      publicationAutocomplete: {
        id: "publicationAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryPublicationImport: {
        id: "categoryPublicationImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryPublicationCreate: {
        id: "categoryPublicationCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryPublicationEdit: {
        id: "categoryPublicationEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryPublicationDestroy: {
        id: "categoryPublicationDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryPublicationRead: {
        id: "categoryPublicationRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryPublicationAutocomplete: {
        id: "categoryPublicationAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryAppelImport: {
        id: "categoryAppelImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryAppelCreate: {
        id: "categoryAppelCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryAppelEdit: {
        id: "categoryAppelEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryAppelDestroy: {
        id: "categoryAppelDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryAppelRead: {
        id: "categoryAppelRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryAppelAutocomplete: {
        id: "categoryAppelAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      forumImport: {
        id: "forumImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      forumCreate: {
        id: "forumCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      forumEdit: {
        id: "forumEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      forumDestroy: {
        id: "forumDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      forumRead: {
        id: "forumRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      forumAutocomplete: {
        id: "forumAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      demandeAppuiImport: {
        id: "demandeAppuiImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      demandeAppuiCreate: {
        id: "demandeAppuiCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.demandeAppuiSupports],
      },
      demandeAppuiEdit: {
        id: "demandeAppuiEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.demandeAppuiSupports],
      },
      demandeAppuiDestroy: {
        id: "demandeAppuiDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.demandeAppuiSupports],
      },
      demandeAppuiRead: {
        id: "demandeAppuiRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      demandeAppuiAutocomplete: {
        id: "demandeAppuiAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      evenementImport: {
        id: "evenementImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      evenementCreate: {
        id: "evenementCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.evenementSupports],
      },
      evenementEdit: {
        id: "evenementEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.evenementSupports],
      },
      evenementDestroy: {
        id: "evenementDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.evenementSupports],
      },
      evenementRead: {
        id: "evenementRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      evenementAutocomplete: {
        id: "evenementAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryEvenementImport: {
        id: "categoryEvenementImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryEvenementCreate: {
        id: "categoryEvenementCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryEvenementEdit: {
        id: "categoryEvenementEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryEvenementDestroy: {
        id: "categoryEvenementDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryEvenementRead: {
        id: "categoryEvenementRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryEvenementAutocomplete: {
        id: "categoryEvenementAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      thematiqueImport: {
        id: "thematiqueImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      thematiqueCreate: {
        id: "thematiqueCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      thematiqueEdit: {
        id: "thematiqueEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      thematiqueDestroy: {
        id: "thematiqueDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      thematiqueRead: {
        id: "thematiqueRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      thematiqueAutocomplete: {
        id: "thematiqueAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      tagsImport: {
        id: "tagsImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tagsCreate: {
        id: "tagsCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tagsEdit: {
        id: "tagsEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tagsDestroy: {
        id: "tagsDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      tagsRead: {
        id: "tagsRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tagsAutocomplete: {
        id: "tagsAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      artisteImport: {
        id: "artisteImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      artisteCreate: {
        id: "artisteCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      artisteEdit: {
        id: "artisteEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      artisteDestroy: {
        id: "artisteDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      artisteRead: {
        id: "artisteRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      artisteAutocomplete: {
        id: "artisteAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      domaineImport: {
        id: "domaineImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      domaineCreate: {
        id: "domaineCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      domaineEdit: {
        id: "domaineEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      domaineDestroy: {
        id: "domaineDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      domaineRead: {
        id: "domaineRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      domaineAutocomplete: {
        id: "domaineAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      espaceArtistiqueImport: {
        id: "espaceArtistiqueImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      espaceArtistiqueCreate: {
        id: "espaceArtistiqueCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.espaceArtistiqueSupports],
      },
      espaceArtistiqueEdit: {
        id: "espaceArtistiqueEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.espaceArtistiqueSupports],
      },
      espaceArtistiqueDestroy: {
        id: "espaceArtistiqueDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [storage.espaceArtistiqueSupports],
      },
      espaceArtistiqueRead: {
        id: "espaceArtistiqueRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      espaceArtistiqueAutocomplete: {
        id: "espaceArtistiqueAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mouvementImport: {
        id: "mouvementImport",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mouvementCreate: {
        id: "mouvementCreate",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      mouvementEdit: {
        id: "mouvementEdit",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      mouvementDestroy: {
        id: "mouvementDestroy",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      mouvementRead: {
        id: "mouvementRead",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mouvementAutocomplete: {
        id: "mouvementAutocomplete",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      actionImport: {
        id: "actionImport",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      actionCreate: {
        id: "actionCreate",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      actionEdit: {
        id: "actionEdit",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      actionDestroy: {
        id: "actionDestroy",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      actionRead: {
        id: "actionRead",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      actionAutocomplete: {
        id: "actionAutocomplete",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      suicideImport: {
        id: "suicideImport",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      suicideCreate: {
        id: "suicideCreate",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      suicideEdit: {
        id: "suicideEdit",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      suicideDestroy: {
        id: "suicideDestroy",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      suicideRead: {
        id: "suicideRead",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      suicideAutocomplete: {
        id: "suicideAutocomplete",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      violenceImport: {
        id: "violenceImport",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      violenceCreate: {
        id: "violenceCreate",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      violenceEdit: {
        id: "violenceEdit",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      violenceDestroy: {
        id: "violenceDestroy",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      violenceRead: {
        id: "violenceRead",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      violenceAutocomplete: {
        id: "violenceAutocomplete",
        allowedRoles: [roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mediatiqueImport: {
        id: "mediatiqueImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mediatiqueCreate: {
        id: "mediatiqueCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.mediatiquePhotos,
          storage.mediatiqueVideos,
          storage.mediatiqueAttachements,
        ],
      },
      mediatiqueEdit: {
        id: "mediatiqueEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.mediatiquePhotos,
          storage.mediatiqueVideos,
          storage.mediatiqueAttachements,
        ],
      },
      mediatiqueDestroy: {
        id: "mediatiqueDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.mediatiquePhotos,
          storage.mediatiqueVideos,
          storage.mediatiqueAttachements,
        ],
      },
      mediatiqueRead: {
        id: "mediatiqueRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      mediatiqueAutocomplete: {
        id: "mediatiqueAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      aproposImport: {
        id: "aproposImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      aproposCreate: {
        id: "aproposCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      aproposEdit: {
        id: "aproposEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      aproposDestroy: {
        id: "aproposDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      aproposRead: {
        id: "aproposRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      aproposAutocomplete: {
        id: "aproposAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      sujetImport: {
        id: "sujetImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sujetCreate: {
        id: "sujetCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      sujetEdit: {
        id: "sujetEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      sujetDestroy: {
        id: "sujetDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      sujetRead: {
        id: "sujetRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sujetAutocomplete: {
        id: "sujetAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryActionImport: {
        id: "categoryActionImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryActionCreate: {
        id: "categoryActionCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryActionEdit: {
        id: "categoryActionEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryActionDestroy: {
        id: "categoryActionDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryActionRead: {
        id: "categoryActionRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryActionAutocomplete: {
        id: "categoryActionAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      espaceImport: {
        id: "espaceImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      espaceCreate: {
        id: "espaceCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      espaceEdit: {
        id: "espaceEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      espaceDestroy: {
        id: "espaceDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      espaceRead: {
        id: "espaceRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      espaceAutocomplete: {
        id: "espaceAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      acteursImport: {
        id: "acteursImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      acteursCreate: {
        id: "acteursCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      acteursEdit: {
        id: "acteursEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      acteursDestroy: {
        id: "acteursDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      acteursRead: {
        id: "acteursRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      acteursAutocomplete: {
        id: "acteursAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      raisonImport: {
        id: "raisonImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      raisonCreate: {
        id: "raisonCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      raisonEdit: {
        id: "raisonEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      raisonDestroy: {
        id: "raisonDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      raisonRead: {
        id: "raisonRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      raisonAutocomplete: {
        id: "raisonAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      cadreImport: {
        id: "cadreImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cadreCreate: {
        id: "cadreCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      cadreEdit: {
        id: "cadreEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      cadreDestroy: {
        id: "cadreDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      cadreRead: {
        id: "cadreRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cadreAutocomplete: {
        id: "cadreAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryViolenceImport: {
        id: "categoryViolenceImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryViolenceCreate: {
        id: "categoryViolenceCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryViolenceEdit: {
        id: "categoryViolenceEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryViolenceDestroy: {
        id: "categoryViolenceDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryViolenceRead: {
        id: "categoryViolenceRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryViolenceAutocomplete: {
        id: "categoryViolenceAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      objectifImport: {
        id: "objectifImport",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      objectifCreate: {
        id: "objectifCreate",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      objectifEdit: {
        id: "objectifEdit",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      objectifDestroy: {
        id: "objectifDestroy",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      objectifRead: {
        id: "objectifRead",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      objectifAutocomplete: {
        id: "objectifAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin, roles.admin_OST],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      glossaireImport: {
        id: "glossaireImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      glossaireCreate: {
        id: "glossaireCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      glossaireEdit: {
        id: "glossaireEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      glossaireDestroy: {
        id: "glossaireDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      glossaireRead: {
        id: "glossaireRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      glossaireAutocomplete: {
        id: "glossaireAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoryGlossaireImport: {
        id: "categoryGlossaireImport",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryGlossaireCreate: {
        id: "categoryGlossaireCreate",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryGlossaireEdit: {
        id: "categoryGlossaireEdit",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryGlossaireDestroy: {
        id: "categoryGlossaireDestroy",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [],
      },
      categoryGlossaireRead: {
        id: "categoryGlossaireRead",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryGlossaireAutocomplete: {
        id: "categoryGlossaireAutocomplete",
        allowedRoles: [roles.admin, roles.Super_admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
