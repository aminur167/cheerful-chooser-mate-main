import { useState } from "react";
import { CheckCircle2, Circle, Eye, LockKeyhole, Printer } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReportPreview } from "@/components/daily-reports/report-preview";
import { CLOSING_CHECKLIST, type DailyReport } from "@/constants/daily-report-data";

export function ReportPreviewDialog({
  open,
  onOpenChange,
  report,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report?: DailyReport;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-border px-6 py-5">
          <DialogTitle>Daily Report Preview</DialogTitle>
          <DialogDescription>
            Printable end-of-day summary for Dhaka Main Branch.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[62vh] overflow-y-auto px-6 py-5">
          <ReportPreview report={report} />
        </div>
        <DialogFooter className="border-t border-border px-6 py-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => toast.info("PDF export is a placeholder in this build")}>
            <Printer className="h-4 w-4" aria-hidden="true" />
            Export PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function EndOfDayClosing({ report }: { report?: DailyReport }) {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(CLOSING_CHECKLIST.map((item) => [item.id, item.done])),
  );
  const [previewOpen, setPreviewOpen] = useState(false);

  const doneCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((doneCount / CLOSING_CHECKLIST.length) * 100);
  const ready = doneCount === CLOSING_CHECKLIST.length;

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-5">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <LockKeyhole className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="text-[16px] font-semibold tracking-tight text-foreground">
              Close Today's Operations
            </h2>
            <p className="mt-0.5 text-[12.5px] text-muted-foreground">
              Complete every checklist item before closing the day.
            </p>
          </div>
        </div>
        <div className="min-w-[190px] space-y-2">
          <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
            <span className="text-muted-foreground">Closing readiness</span>
            <span className="font-medium tabular-nums text-foreground">
              {doneCount}/{CLOSING_CHECKLIST.length} · {pct}%
            </span>
          </div>
          <Progress value={pct} className="h-1.5" />
        </div>
      </div>

      <ul className="grid gap-3 p-5 sm:grid-cols-2">
        {CLOSING_CHECKLIST.map((item) => {
          const isDone = checked[item.id];
          return (
            <li
              key={item.id}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 transition-colors",
                isDone ? "border-success/30 bg-success/5" : "border-border bg-muted/25",
              )}
            >
              <Checkbox
                id={`close-${item.id}`}
                checked={isDone}
                onCheckedChange={(value) =>
                  setChecked((prev) => ({ ...prev, [item.id]: value === true }))
                }
                className="mt-0.5"
                aria-label={item.label}
              />
              <div className="min-w-0 flex-1">
                <label
                  htmlFor={`close-${item.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  ) : (
                    <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                  <span className="min-w-0 truncate">{item.label}</span>
                </label>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-end gap-2.5 border-t border-border px-5 py-4">
        <Button variant="outline" onClick={() => setPreviewOpen(true)}>
          <Eye className="h-4 w-4" aria-hidden="true" />
          Preview Report
        </Button>
        <Button
          disabled={!ready}
          onClick={() => toast.success("Today's operations closed — report locked for sign-off")}
        >
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          Close Today's Operations
        </Button>
      </div>

      <ReportPreviewDialog open={previewOpen} onOpenChange={setPreviewOpen} report={report} />
    </Card>
  );
}
