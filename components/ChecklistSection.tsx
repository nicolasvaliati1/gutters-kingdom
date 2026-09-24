import { fillCity } from "@/lib/text";

const checklist = [
  "Ask for a written estimate, not a verbal number over the phone",
  "Confirm they carry liability insurance and workers' comp, not just a license",
  "Ask what gauge and hanger spacing the quote assumes, not just what color",
  "Get the warranty terms in writing before you sign anything",
  "Ask for two or three {city}-area references you can actually call",
];

export function ChecklistSection({ cityName }: { cityName: string }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {checklist.map((item) => (
        <li key={item} className="flex items-start gap-3 border border-border bg-white p-4 text-sm text-ink/80">
          <span className="mt-0.5 text-accent-dark" aria-hidden>
            ✓
          </span>
          <span>{fillCity(item, cityName)}</span>
        </li>
      ))}
    </ul>
  );
}
