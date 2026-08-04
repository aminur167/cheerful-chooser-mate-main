import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/common/status-badge";
import type { TherapyProgressSkill } from "@/constants/therapy-data";

const barTone: Record<string, string> = {
  success: "[&>div]:bg-success",
  info: "[&>div]:bg-info",
  warning: "[&>div]:bg-warning",
  danger: "[&>div]:bg-danger",
  neutral: "[&>div]:bg-muted-foreground",
};

/** Single skill progress card used on the session details page. */
export function ProgressCard({ skill }: { skill: TherapyProgressSkill }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-card transition-enterprise hover:bg-surface-hover">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <p className="min-w-0 truncate text-[13px] font-medium text-foreground">{skill.label}</p>
        <StatusBadge tone={skill.tone} label={skill.status} />
      </div>
      <p className="mt-3 text-[22px] font-semibold leading-none tabular-nums text-foreground">
        {skill.value}%
      </p>
      <Progress value={skill.value} className={cn("mt-3", barTone[skill.tone])} />
    </div>
  );
}

export function ProgressTracker({ skills }: { skills: TherapyProgressSkill[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill) => (
        <ProgressCard key={skill.key} skill={skill} />
      ))}
    </div>
  );
}
