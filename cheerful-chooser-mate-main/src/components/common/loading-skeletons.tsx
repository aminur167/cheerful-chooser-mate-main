import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <div className="flex gap-6 border-b border-border bg-muted/40 px-5 py-3.5">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} className="h-3.5 flex-1" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-6 border-b border-border px-5 py-4 last:border-0">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3.5 rounded-xl border border-border bg-card p-6 shadow-card", className)}>
      <Skeleton className="h-3.5 w-24" />
      <Skeleton className="h-7 w-32" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
    </div>
  );
}

export function CardGridSkeleton({ items = 4 }: { items?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: items }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function FormSkeleton({ fields = 5 }: { fields?: number }) {
  return (
    <div className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-card">
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-3 w-64" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {Array.from({ length: fields }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2.5 border-t border-border pt-5">
        <Skeleton className="h-9 w-24 rounded-lg" />
        <Skeleton className="h-9 w-28 rounded-lg" />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-3 border-b border-border pb-7">
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-3.5 w-80" />
      </div>
      <CardGridSkeleton />
      <TableSkeleton />
    </div>
  );
}

export function ListSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3.5">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-3.5 w-2/5" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
