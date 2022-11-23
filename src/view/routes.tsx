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
    path: "/Evenements/:id",
    loader: () => import("src/view/Evenements/EvenementDetaill"),
  },
  {
    path: "/Mediatheque",
    loader: () => import("src/view/Médiathèque/Mediatheque"),
  },
  {
    path: "/Mediatheque/type/:entity_type",
    loader: () => import("src/view/Médiathèque/shared/SpecificEntityList"),
  },
  {
    path: "/Mediatheque/entity/:entity_id",
    loader: () => import("src/view/Médiathèque/show-one/showDetails"),
  },
  { path: "/contact", loader: () => import("src/view/Contact/Contact") },
];
const privateRoutes = [
  {
    path: "/profile",
    loader: () => import("src/view/auth/Profile"),
    permissionRequired: permissions.userRead,
    exact: true,
  },
  {
    path: "/profile/update",
    loader: () => import("src/view/auth/ProfileForm"),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: "/password-change",
    loader: () => import("src/view/auth/PasswordChangeFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appui/new",
    loader: () => import("src/view/Appui/form/AppuiFormPage"),
    permissionRequired: permissions.demandeAppuiCreate,
    exact: true,
  },
  {
    path: "/appui/:id/edit",
    loader: () => import("src/view/Appui/form/AppuiFormPage"),
    permissionRequired: permissions.demandeAppuiEdit,
    exact: true,
  },

  {
    path: "/publication/new",
    loader: () => import("src/view/Publications/form/PublicationFormPage"),
    permissionRequired: permissions.publicationCreate,
    exact: true,
  },
  {
    path: "/publication/:id/edit",
    loader: () => import("src/view/Publications/form/PublicationFormPage"),
    permissionRequired: permissions.publicationEdit,
    exact: true,
  },
  {
    path: "/favoris",
    loader: () => import("src/view/Favoris/Favoris"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/detaill/:id",
    loader: () => import("src/view/shared/Detaill/Detaill"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/detaill/category/:id",
    loader: () => import("src/view/shared/Detaill/Detaill"),
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
