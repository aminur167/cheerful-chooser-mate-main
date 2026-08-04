import { cn } from "@/lib/utils";
import { SCORE_LABELS, SCORE_TONE } from "@/constants/assessment-data";
import { StatusBadge } from "@/components/common/status-badge";

const SCORES = [1, 2, 3, 4, 5];

const activeTone: Record<number, string> = {
  1: "border-danger/50 bg-danger/12 text-danger",
  2: "border-danger/50 bg-danger/12 text-danger",
  3: "border-warning/50 bg-warning/15 text-warning",
  4: "border-info/50 bg-info/12 text-info",
  5: "border-success/50 bg-success/12 text-success",
};

/** Compact 1—5 clinical rating selector used across the evaluation step. */
export function ScoreRating({
  id,
  label,
  value,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (score: number) => void;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-card transition-enterprise hover:bg-surface-hover">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <p id={`${id}-label`} className="truncate text-[13px] font-medium text-foreground">
            {label}
          </p>
          <p className="mt-0.5 text-[12px] text-muted-foreground">
            {hint ?? SCORE_LABELS[value]}
          </p>
        </div>
        <StatusBadge tone={SCORE_TONE[value]} label={`${value}/5`} dot={false} />
      </div>

      <div
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        className="mt-3 grid grid-cols-5 gap-1.5"
      >
        {SCORES.map((score) => (
          <button
            key={score}
            type="button"
            role="radio"
            aria-checked={value === score}
            aria-label={`${label}: ${score} — ${SCORE_LABELS[score]}`}
            onClick={() => onChange(score)}
            className={cn(
              "h-9 rounded-md border text-[13px] font-semibold tabular-nums transition-enterprise",
              value === score
                ? activeTone[score]
                : "border-border bg-muted/40 text-muted-foreground hover:bg-surface-hover",
            )}
          >
            {score}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Read-only representation used on the assessment details page. */
export function ScoreMeter({ label, score, note }: { label: string; score: number; note?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <p className="min-w-0 truncate text-[13px] font-medium text-foreground">{label}</p>
        <StatusBadge tone={SCORE_TONE[score]} label={`${score}/5`} dot={false} />
      </div>
      <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
        {SCORES.map((step) => (
          <span
            key={step}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              step <= score
                ? score <= 2
                  ? "bg-danger"
                  : score === 3
                    ? "bg-warning"
                    : score === 4
                      ? "bg-info"
                      : "bg-success"
                : "bg-muted",
            )}
          />
        ))}
      </div>
      <p className="mt-2 text-[12px] text-muted-foreground">
        {note ? note : SCORE_LABELS[score]}
      </p>
    </div>
  );
}
