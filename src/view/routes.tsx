import Permissions from "src/security/permissions";

const permissions = Permissions.values;

const navigateRoutes = [
	{
		path: "/",
		loader: () => import("src/view/Publications/Publications"),
	},
	{
		path: "/TableaudeBoard",
		loader: () => import("src/view/TableaudeBoard/TableaudeBoard"),
	},

	{ path: "/A_propos", loader: () => import("src/view/Propos_nous/Propos") },
	{
		path: "/detaill/:id",
		loader: () => import("src/view/shared/Detaill/Detaill"),
	},
	{
		path: "/detaill/category/:id",
		loader: () => import("src/view/shared/Detaill/Detaill"),
	},
	{
		path: "/detaill/Evenement/Venir",
		loader: () => import("src/view/shared/Detaill/DetaillEvenemnts"),
	},
	{
		path: "/detaill/Evenement/Passe",
		loader: () => import("src/view/shared/Detaill/DetaillEvenemnts"),
	},
	{
		path: "/Publications",
		loader: () => import("src/view/Publications/Publications"),
	},
	{
		path: "/Publications/:id",
		loader: () => import("src/view/shared/show-one/Index"),
	},
	{ path: "/Archives", loader: () => import("src/view/Archive/Archives") },
	{
		path: "/SearchArchive",
		loader: () => import("src/view/Archive/SearchArchive"),
	},
	{ path: "/Glossaire", loader: () => import("src/view/Glossaire/Glossaire") },
	{
		path: "/Glossaire/:id",
		// loader: () => import("src/view/Glossaire/ShowOne/ShowGlossaire"),
		loader: () => import("src/view/Glossaire/ViewDetails"),
	},
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
	// { path: "/contact", loader: () => import("src/view/Search/Search") },
	{ path: "/search", loader: () => import("src/view/Search/Search") },
	{
		path: "/detail/:id",
		loader: () => import("src/view/shared/show-one/Detail"),
	},
];
const privateRoutes = [
	{
		path: "/profile",
		loader: () => import("src/view/auth/Profile"),
		permissionRequired: null,
		exact: true,
	},
	{
		path: "/profile/update",
		loader: () => import("src/view/auth/ProfileForm"),
		permissionRequired: null,
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
		// permissionRequired: null,
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
		// permissionRequired: null,
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
