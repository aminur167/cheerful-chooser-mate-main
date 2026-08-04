import { useState } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  NotebookPen,
  Quote,
  Redo2,
  Save,
  Underline,
  Undo2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  DEFAULT_NOTES,
  NOTE_FIELDS,
  type DailyNotes,
} from "@/constants/daily-report-data";

const TOOLBAR = [
  { id: "bold", label: "Bold", icon: Bold },
  { id: "italic", label: "Italic", icon: Italic },
  { id: "underline", label: "Underline", icon: Underline },
  { id: "bullet", label: "Bulleted list", icon: List },
  { id: "numbered", label: "Numbered list", icon: ListOrdered },
  { id: "quote", label: "Quote", icon: Quote },
];

/** Rich-text editor placeholder — toolbar is visual only (frontend scope). */
function EditorToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/30 px-2 py-1.5">
      {TOOLBAR.map((tool) => (
        <Button
          key={tool.id}
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={tool.label}
          title={`${tool.label} (coming soon)`}
        >
          <tool.icon className="h-4 w-4" />
        </Button>
      ))}
      <Separator orientation="vertical" className="mx-1 h-5" />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground"
        aria-label="Undo"
      >
        <Undo2 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground"
        aria-label="Redo"
      >
        <Redo2 className="h-4 w-4" />
      </Button>
      <span className="ml-auto pr-1 text-[11.5px] text-muted-foreground">
        Rich text coming soon
      </span>
    </div>
  );
}

export function ManagerNotesEditor({ initial = DEFAULT_NOTES }: { initial?: DailyNotes }) {
  const [notes, setNotes] = useState<DailyNotes>(initial);

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <NotebookPen className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
              Manager Notes
            </h2>
            <p className="mt-0.5 text-[12.5px] text-muted-foreground">
              End-of-day narrative for Dhaka Main Branch — 31 July 2026
            </p>
          </div>
        </div>
        <Button onClick={() => toast.success("Manager notes saved for today")}>
          <Save className="h-4 w-4" aria-hidden="true" />
          Save Notes
        </Button>
      </div>

      <div className="grid gap-5 p-5 xl:grid-cols-2">
        {NOTE_FIELDS.map((field) => (
          <div
            key={field.id}
            className={field.id === "tomorrow" ? "space-y-2 xl:col-span-2" : "space-y-2"}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <Label htmlFor={`note-${field.id}`}>{field.label}</Label>
              <span className="text-[11.5px] text-muted-foreground">{field.hint}</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <EditorToolbar />
              <Textarea
                id={`note-${field.id}`}
                value={notes[field.id]}
                onChange={(event) =>
                  setNotes((prev) => ({ ...prev, [field.id]: event.target.value }))
                }
                placeholder={field.placeholder}
                rows={5}
                className="resize-y rounded-none border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ManagerNotesSummary({ notes = DEFAULT_NOTES }: { notes?: DailyNotes }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {NOTE_FIELDS.map((field) => (
        <div
          key={field.id}
          className={
            field.id === "tomorrow"
              ? "rounded-xl border border-border bg-muted/25 p-4 sm:col-span-2"
              : "rounded-xl border border-border bg-muted/25 p-4"
          }
        >
          <dt className="text-[12.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
            {field.label}
          </dt>
          <dd className="mt-2 text-[13px] leading-relaxed text-foreground">{notes[field.id]}</dd>
        </div>
      ))}
    </dl>
  );
}
