/* eslint-disable import/no-anonymous-default-export */
export default [
  { path: "/", label: "Menue", icon: "fa-sharp fa-solid fa-bars" },
  { path: "/A_propos", label: "propos" },
  {
    path: "/Publications",
    label: "Publications",
    icon: "fa-solid fa-chevron-down",
    class: "dropdown",
    subMenue: [
      {
        label: "Communiqués",
      },
      { label: "Articles" },
      { label: "Etudes" },
      { label: "Cahiers" },
      { label: "Appels" },
    ],
  },
  { path: "/Archives", label: "Archives" },
  { path: "/Glossaire", label: "Glossaire" },
  { path: "/Evenements", label: "Evènements" },
  {
    path: "/TableaudeBoard",
    label: "Tableau",
  },
  {
    path: "/Mediatheque",
    label: "Médiathèque",
    icon: "fa-solid fa-chevron-down",
    class: "dropdown",
    subMenue: [
      {
        label: "Vidéos",
        path: "/",
      },
      { label: "Podcast" },
      { label: "Photos" },
      { label: "Documentaires" },
      { label: "Autres" },
    ],
  },
  { path: "/Contact", label: "Contact" },
];
