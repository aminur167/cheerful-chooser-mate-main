import {
  CalendarRange,
  CreditCard,
  Copy,
  Globe,
  Layers,
  MoreHorizontal,
  PencilLine,
  Power,
  Sun,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import {
  PACKAGE_STATUS_TONE,
  PACKAGE_TYPE_TONE,
  type PackageType,
  type PaymentPackage,
} from "@/constants/payment-data";

const TYPE_ICON: Record<PackageType, LucideIcon> = {
  Daily: Sun,
  "Session Wise": Layers,
  Monthly: CalendarRange,
  "Online Booking": Globe,
};

export function PackageCard({
  item,
  onCollect,
}: {
  item: PaymentPackage;
  onCollect?: (item: PaymentPackage) => void;
}) {
  const Icon = TYPE_ICON[item.type];
  const netPrice = Math.round(item.price * (1 - item.discount / 100));

  return (
    <Card interactive className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-semibold tracking-tight text-foreground">
              {item.name}
            </h3>
            <p className="truncate font-mono text-[12px] text-muted-foreground">{item.code}</p>
          </div>
        </div>
        <PackageActions item={item} onCollect={onCollect} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StatusBadge tone={PACKAGE_TYPE_TONE[item.type]} label={item.type} dot={false} />
        <StatusBadge tone={PACKAGE_STATUS_TONE[item.status]} label={item.status} />
      </div>

      <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-4 flex items-end gap-2 border-t border-border pt-4">
        <span className="text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(netPrice)}
        </span>
        {item.discount > 0 ? (
          <span className="text-[13px] text-muted-foreground line-through tabular-nums">
            {formatTaka(item.price)}
          </span>
        ) : null}
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[12.5px]">
        <Meta label="Duration" value={item.durationLabel} />
        <Meta label="Sessions" value={item.sessions === 1 ? "1 session" : `${item.sessions} sessions`} />
        <Meta label="Registration fee" value={formatTaka(item.registrationFee)} />
        <Meta label="Expiry" value={item.expiry} />
      </dl>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {item.enrolledPatients} enrolled
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <PencilLine className="h-4 w-4" aria-hidden="true" />
            Edit
          </Button>
          <Button size="sm" onClick={() => onCollect?.(item)}>
            <CreditCard className="h-4 w-4" aria-hidden="true" />
            Collect
          </Button>
        </div>
      </div>
    </Card>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="truncate font-medium text-foreground">{value}</dd>
    </div>
  );
}

function PackageActions({
  item,
  onCollect,
}: {
  item: PaymentPackage;
  onCollect?: (item: PaymentPackage) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="shrink-0 text-muted-foreground"
          aria-label={`Actions for ${item.name}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit package
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="h-4 w-4" aria-hidden="true" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => onCollect?.(item)}>
          <CreditCard className="h-4 w-4" aria-hidden="true" />
          Collect payment
        </DropdownMenuItem>
        <DropdownMenuItem className={cn(item.status === "Active" && "text-danger")}>
          <Power className="h-4 w-4" aria-hidden="true" />
          {item.status === "Active" ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
