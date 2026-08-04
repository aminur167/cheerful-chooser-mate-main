import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Blocks,
  Layers,
  Library,
  ScanFace,
  Sparkles,
  Type,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CategoryIconKey, MaterialCategoryName } from "@/constants/material-data";

/** Serializable icon keys are mapped to components here, in the view layer. */
export const CATEGORY_ICONS: Record<CategoryIconKey, LucideIcon> = {
  cards: Layers,
  flash: Zap,
  book: BookOpen,
  puzzle: Blocks,
  sensory: Sparkles,
  alphabet: Type,
  library: Library,
  mirror: ScanFace,
};

const CATEGORY_BY_NAME: Record<MaterialCategoryName, CategoryIconKey> = {
  "Speech Cards": "cards",
  "Flash Cards": "flash",
  "Picture Books": "book",
  "Puzzle Toys": "puzzle",
  "Sensory Toys": "sensory",
  "Alphabet Cards": "alphabet",
  "Educational Books": "library",
  "Therapy Mirror": "mirror",
};

/**
 * Image placeholder for a material. Real product photos will replace the
 * category glyph once the API serves image URLs.
 */
export function MaterialThumbnail({
  category,
  size = "md",
  className,
}: {
  category: MaterialCategoryName;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const Icon = CATEGORY_ICONS[CATEGORY_BY_NAME[category]] ?? Boxes;
  return (
    <span
      role="img"
      aria-label={`${category} image placeholder`}
      className={cn(
        "grid shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground shadow-card transition-enterprise",
        size === "sm" && "h-9 w-9",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-20 w-20 rounded-xl",
        className,
      )}
    >
      <Icon className={size === "lg" ? "h-8 w-8" : "h-[18px] w-[18px]"} aria-hidden="true" />
    </span>
  );
}
