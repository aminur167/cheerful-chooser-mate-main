import { ArrowRight, Boxes } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { StatusBadge, type StatusTone } from "@/components/common/status-badge";
import { CATEGORY_ICONS } from "@/components/materials/material-thumbnail";
import { formatTaka } from "@/constants/dashboard-data";
import { MATERIAL_CATEGORIES } from "@/constants/material-data";

const TONE: Record<StatusTone, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  info: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

export function CategoryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {MATERIAL_CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] ?? Boxes;
        return (
          <Card key={category.id} interactive className="group p-5">
            <div className="flex items-start justify-between gap-3">
              <span
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
                  TONE[category.tone],
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <StatusBadge
                tone="neutral"
                label={`${category.itemCount} items`}
                dot={false}
              />
            </div>

            <h3 className="mt-4 truncate text-[15px] font-semibold tracking-tight text-foreground">
              {category.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
              {category.description}
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[12.5px]">
              <div className="min-w-0">
                <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                  Stock units
                </dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-foreground">
                  {category.stockUnits}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                  Stock value
                </dt>
                <dd className="mt-0.5 truncate font-semibold tabular-nums text-foreground">
                  {formatTaka(category.value)}
                </dd>
              </div>
            </dl>

            <Link
              to="/manager/materials"
              search={{ tab: "inventory" }}
              className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-primary transition-enterprise hover:gap-2.5"
            >
              View materials
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
