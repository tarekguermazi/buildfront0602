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
        path: "/",
      },
      { label: "Articles", path: "/" },
      { label: "Etudes", path: "/" },
      { label: "Cahiers", path: "/" },
      { label: "Appels", path: "/" },
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
        path: "/Mediatheque/type/videos",
      },
      { label: "Podcast", path: "/Mediatheque/type/podcasts" },
      { label: "Photos", path: "/Mediatheque/type/photos" },
      { label: "Documentaires", path: "/Mediatheque/type/documentaires" },
      { label: "Autres", path: "/Mediatheque/type/autres" },
    ],
  },
  { path: "/Contact", label: "Contact" },
];
