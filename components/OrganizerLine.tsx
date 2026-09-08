import { organizerLine } from "@/lib/site-config";

export default function OrganizerLine() {
  return (
    <section id="organizer-line" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {organizerLine.heading}
          </h2>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-800">
            {organizerLine.lead}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
            {organizerLine.body}
          </p>
        </div>
      </div>
    </section>
  );
}
