import Permissions from "src/security/permissions";

const permissions = Permissions.values;

const navigateRoutes = [
  {
    path: "/",
    loader: () => import("src/view/Home/Home"),
  },
  { path: "/A_propos", loader: () => import("src/view/Propos_nous/Propos") },
  {
    path: "/Publications",
    loader: () => import("src/view/Publications/Publications"),
  },
  { path: "/Archives", loader: () => import("src/view/Archive/Archives") },
  { path: "/Glossaire", loader: () => import("src/view/Glossaire/Glossaire") },
  {
    path: "/Evenements",
    loader: () => import("src/view/Evenements/Evenements"),
  },
  {
    path: "/Mediatheque",
    loader: () => import("src/view/Médiathèque/Mediatheque"),
  },
  { path: "/contact", loader: () => import("src/view/Contact/Contact") },
];
const privateRoutes = [
  {
    path: "/profile",
    loader: () => import("src/view/auth/Profile"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/contenu",
    loader: () => import("src/view/contenu/Contenu"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appui",
    loader: () => import("src/view/Profile/Appui/Appui"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appui/:id/edit",
    loader: () => import("src/view/Profile/Appui/Appui"),
    permissionRequired: permissions.demandeAppuiEdit,
    exact: true,
  },
  {
    path: "/updateprofile",
    loader: () => import("src/view/auth/ProfileForm"),
  },
  {
    path: "/profile/suggest",
    loader: () => import("src/view/Profile/Suggestions/Suggest"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/favoris",
    loader: () => import("src/view/Favoris/Favoris"),
    permissionRequired: null,
    exact: true,
  },
].filter(Boolean);
const publicRoutes = [
  { path: "/auth/signin", loader: () => import("src/view/auth/SigninPage") },
  { path: "/auth/signup", loader: () => import("src/view/auth/SignupPage") },
].filter(Boolean);
const emptyPermissionsRoutes = [
  {
    path: "/auth/empty-permissions",
    loader: () => import("src/view/auth/EmptyPermissionsPage"),
  },
].filter(Boolean);
const simpleRoutes = [
  {
    path: "/auth/forgot-password",
    loader: () => import("src/view/auth/PasswordResetPage"),
  },
  {
    path: "/403",
    loader: () => import("src/view/shared/errors/Error403Page"),
  },
  {
    path: "/500",
    loader: () => import("src/view/shared/errors/Error500Page"),
  },
  {
    path: "**",
    loader: () => import("src/view/shared/errors/Error404Page"),
  },
].filter(Boolean);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navigateRoutes,
  publicRoutes,
  privateRoutes,
  emptyPermissionsRoutes,
  simpleRoutes,
};
