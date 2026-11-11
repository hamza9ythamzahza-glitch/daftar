import { useEffect, useMemo, useState } from "react";
import { Check, Menu, Search, X } from "lucide-react";
import { allChecks, sections, type Block, type Section } from "@/lib/notes";

const STORAGE_KEY = "daftar-checks-v1";
const HIDE_KEY = "daftar-hide-ar";

function sectionBlob(section: Section) {
  return JSON.stringify(section).toLowerCase();
}

export function Notebook() {
  const checks = useMemo(() => allChecks(), []);
  const [active, setActive] = useState(sections[0].id);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hideAr, setHideAr] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
      setHideAr(localStorage.getItem(HIDE_KEY) === "1");
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    localStorage.setItem(HIDE_KEY, hideAr ? "1" : "0");
  }, [done, ready, hideAr]);

  const q = query.trim().toLowerCase();
  const visible = q ? sections.filter((s) => sectionBlob(s).includes(q)) : sections;
  const current = visible.find((s) => s.id === active) ?? visible[0];
  const solved = checks.filter((c) => done[c.id]).length;

  function go(id: string) {
    setActive(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-line bg-ink px-4 py-3 text-on-ink lg:hidden">
        <button
          type="button"
          className="grid size-11 place-items-center rounded-card border border-on-ink/20"
          onClick={() => setOpen(true)}
          aria-label="فتح الفهرس"
        >
          <Menu className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-none">Daftar</p>
          <p className="text-sm text-on-ink/70">خلاصات A1 حتى B1</p>
        </div>
        <p className="font-display text-sm tabular-nums text-on-ink/80">
          {solved}/{checks.length}
        </p>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50"
            aria-label="سدّ الفهرس"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-ink text-on-ink">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="font-display text-xl">الفهرس</p>
              <button
                type="button"
                className="grid size-11 place-items-center"
                onClick={() => setOpen(false)}
                aria-label="سد"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto px-3 pb-6">
              {sections.map((section) => (
                <NavButton
                  key={section.id}
                  section={section}
                  active={current?.id === section.id}
                  hidden={q.length > 0 && !visible.some((s) => s.id === section.id)}
                  onClick={() => go(section.id)}
                />
              ))}
            </nav>
          </div>
        </div>
      ) : null}

      <div className="lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)]">
        <aside className="sticky top-0 hidden h-screen flex-col bg-ink text-on-ink lg:flex">
          <div className="px-5 pt-7 pb-4">
            <p className="text-xs tracking-[0.18em] text-on-ink/55 uppercase">Español</p>
            <h1 className="font-display text-4xl leading-none">Daftar</h1>
            <p className="mt-2 text-sm text-on-ink/70">خلاصات من الصفر حتى B1</p>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3">
            {sections.map((section) => (
              <NavButton
                key={section.id}
                section={section}
                active={current?.id === section.id}
                hidden={q.length > 0 && !visible.some((s) => s.id === section.id)}
                onClick={() => go(section.id)}
              />
            ))}
          </nav>
          <p className="px-5 py-5 text-sm text-on-ink/60 tabular-nums">
            {solved} من {checks.length} مضبوط
          </p>
        </aside>

        <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-8 sm:py-10">
          <label className="mb-3 flex items-center gap-2 rounded-card border border-line bg-sheet px-3 py-2">
            <Search className="size-4 shrink-0 text-muted" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="قلب: ser, gustar, DELE…"
              className="w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="button"
            aria-pressed={hideAr}
            onClick={() => setHideAr((v) => !v)}
            className="mb-6 rounded-card border border-line bg-sheet px-4 py-2 text-sm font-semibold text-ink"
          >
            {hideAr ? "بيّن العربية" : "خبي العربية"}
          </button>

          {!current ? (
            <p className="rounded-card border border-line bg-sheet px-5 py-8 text-muted">
              ما كاين حتى خلاصة فيها «{query}». جرّب ser ولا gustar ولا DELE.
            </p>
          ) : (
            <article>
              <p className="text-sm font-semibold tracking-wide text-terra uppercase">{current.kicker}</p>
              <h2 className="mt-1 font-display text-4xl leading-tight sm:text-5xl">{current.title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">{current.lede}</p>
              <div className="mt-8 flex flex-col gap-6">
                {current.blocks.map((block, i) => (
                  <BlockView key={`${current.id}-${i}`} block={block} done={done} hideAr={hideAr} onToggle={toggle} />
                ))}
              </div>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}

function NavButton({
  section,
  active,
  hidden,
  onClick,
}: {
  section: Section;
  active: boolean;
  hidden: boolean;
  onClick: () => void;
}) {
  if (hidden) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-card px-3 py-3 text-base ${
        active ? "bg-terra text-on-terra" : "text-on-ink/85 hover:bg-on-ink/10"
      }`}
    >
      {section.nav}
    </button>
  );
}

function BlockView({
  block,
  done,
  hideAr,
  onToggle,
}: {
  block: Block;
  done: Record<string, boolean>;
  hideAr: boolean;
  onToggle: (id: string) => void;
}) {
  if (block.type === "p") return <p className="text-lg">{block.text}</p>;

  if (block.type === "h") {
    return <h3 className="font-display text-2xl leading-tight">{block.text}</h3>;
  }

  if (block.type === "callout") {
    return (
      <aside className="rounded-card border border-terra/30 bg-terra-soft px-4 py-4">
        <p className="font-semibold text-terra">{block.title}</p>
        <p className="mt-1">{block.text}</p>
      </aside>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="flex flex-col gap-2">
        {block.items.map((item) => (
          <li key={item} className="border-s-2 border-line ps-3">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "examples") {
    return (
      <ul className="overflow-hidden rounded-card border border-line bg-sheet">
        {block.items.map((item) => (
          <li key={item.es} className="grid gap-1 border-b border-line px-4 py-3 last:border-b-0 sm:grid-cols-2 sm:items-baseline sm:gap-6">
            <span dir="ltr" className="font-display text-xl leading-snug italic text-start">{item.es}</span>
            {hideAr ? null : <span className="text-muted">{item.dar}</span>}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <figure className="overflow-x-auto rounded-card border border-line bg-sheet">
        {block.caption ? (
          <figcaption className="border-b border-line px-4 py-2 text-sm font-semibold text-muted">
            {block.caption}
          </figcaption>
        ) : null}
        <table className="w-full min-w-[28rem] border-collapse text-start text-base">
          <thead>
            <tr className="border-b border-line text-sm text-muted">
              {block.headers.map((header) => (
                <th key={header} className="px-3 py-2 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-line last:border-b-0">
                {row.map((cell, i) => (
                  <td key={`${cell}-${i}`} className={`px-3 py-2 align-top ${i === 0 ? "font-semibold" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    );
  }

  if (block.type === "links") {
    return (
      <ul className="flex flex-col gap-3">
        {block.items.map((item) => (
          <li key={item.href} className="rounded-card border border-line bg-sheet px-4 py-3">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              className="inline-block font-semibold text-terra underline decoration-terra/40 underline-offset-4"
            >
              {item.label}
            </a>
            <p className="mt-1 text-muted">{item.note}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "pairs") {
    return (
      <figure className="overflow-hidden rounded-card border border-line bg-sheet">
        {block.caption ? (
          <figcaption className="border-b border-line px-4 py-2 text-sm font-semibold text-muted">
            {block.caption}
          </figcaption>
        ) : null}
        <ul>
          {block.items.map((item) => (
            <li
              key={item.es}
              className="grid gap-1 border-b border-line px-4 py-2.5 last:border-b-0 sm:grid-cols-2 sm:items-baseline sm:gap-6"
            >
              <span dir="ltr" className="text-start font-semibold">
                {item.es}
              </span>
              {hideAr ? null : <span className="text-muted">{item.ar}</span>}
            </li>
          ))}
        </ul>
      </figure>
    );
  }

  if (block.type === "dialogue") {
    return (
      <section className="overflow-hidden rounded-card border border-line bg-sheet">
        <h3 className="border-b border-line px-4 py-3 font-display text-2xl">{block.title}</h3>
        <ul>
          {block.lines.map((line, i) => (
            <li key={`${line.who}-${i}`} className="border-b border-line px-4 py-3 last:border-b-0">
              <p className="text-sm font-semibold text-terra">{line.who}</p>
              <p dir="ltr" className="text-start font-display text-xl leading-snug italic">
                {line.es}
              </p>
              {hideAr ? null : <p className="text-muted">{line.ar}</p>}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === "reading") {
    return (
      <article className="rounded-card border border-line bg-sheet px-4 py-4">
        <p className="text-sm font-semibold text-terra">{block.level}</p>
        <h3 className="font-display text-2xl">{block.title}</h3>
        <p dir="ltr" className="mt-3 text-start font-display text-xl leading-relaxed whitespace-pre-line">
          {block.es}
        </p>
        {hideAr ? null : (
          <p className="mt-4 border-t border-line pt-3 leading-relaxed whitespace-pre-line text-muted">
            {block.ar}
          </p>
        )}
      </article>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {block.items.map((item) => {
        const on = Boolean(done[item.id]);
        return (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(item.id)}
              className="flex w-full items-start gap-3 rounded-card border border-line bg-sheet px-3 py-3"
            >
              <span
                className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border ${
                  on ? "border-terra bg-terra text-on-terra" : "border-line bg-paper text-transparent"
                }`}
              >
                <Check className="size-3.5" />
              </span>
              <span className={on ? "text-muted line-through" : ""}>{item.text}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
