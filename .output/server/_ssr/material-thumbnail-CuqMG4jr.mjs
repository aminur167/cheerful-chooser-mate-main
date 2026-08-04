import { Cn as Boxes, En as Blocks, Et as Layers, O as Sparkles, R as ScanFace, _ as Type, t as Zap, wn as BookOpen, wt as Library } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/material-thumbnail-CuqMG4jr.js
var import_jsx_runtime = require_jsx_runtime();
/** Serializable icon keys are mapped to components here, in the view layer. */
var CATEGORY_ICONS = {
	cards: Layers,
	flash: Zap,
	book: BookOpen,
	puzzle: Blocks,
	sensory: Sparkles,
	alphabet: Type,
	library: Library,
	mirror: ScanFace
};
var CATEGORY_BY_NAME = {
	"Speech Cards": "cards",
	"Flash Cards": "flash",
	"Picture Books": "book",
	"Puzzle Toys": "puzzle",
	"Sensory Toys": "sensory",
	"Alphabet Cards": "alphabet",
	"Educational Books": "library",
	"Therapy Mirror": "mirror"
};
/**
* Image placeholder for a material. Real product photos will replace the
* category glyph once the API serves image URLs.
*/
function MaterialThumbnail({ category, size = "md", className }) {
	const Icon = CATEGORY_ICONS[CATEGORY_BY_NAME[category]] ?? Boxes;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "img",
		"aria-label": `${category} image placeholder`,
		className: cn("grid shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground shadow-card transition-enterprise", size === "sm" && "h-9 w-9", size === "md" && "h-10 w-10", size === "lg" && "h-20 w-20 rounded-xl", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: size === "lg" ? "h-8 w-8" : "h-[18px] w-[18px]",
			"aria-hidden": "true"
		})
	});
}
//#endregion
export { MaterialThumbnail as n, CATEGORY_ICONS as t };
