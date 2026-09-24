// Shared webhook submission for every lead form on the site. Two
// destinations, configured via env vars (never hardcoded, so URLs aren't
// committed to git and can be rotated independently of a deploy):
//
//   NEXT_PUBLIC_QUOTE_WEBHOOK_URL    — "Get Free Quote" button + hero/
//                                      sidebar forms (components/QuoteForm)
//   NEXT_PUBLIC_CALLBACK_WEBHOOK_URL — "Call Me" button (components/CallbackModal)
//
// These are NEXT_PUBLIC_ because this is a static export with no server
// runtime — the browser posts directly to the webhook. Set both locally in
// .env(.local) and in the Vercel project's Environment Variables, then
// redeploy; a missing var fails loudly instead of silently dropping leads.

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitToWebhook(
  webhookUrl: string | undefined,
  form: HTMLFormElement,
  extra: Record<string, string> = {}
): Promise<SubmitResult> {
  const data = new FormData(form);

  // Honeypot: if the hidden "website" field got filled, it's a bot —
  // report success without sending anything, so the bot doesn't learn.
  if (data.get("website")) {
    return { ok: true };
  }

  if (!webhookUrl) {
    console.error(
      "No webhook URL configured — set NEXT_PUBLIC_QUOTE_WEBHOOK_URL / NEXT_PUBLIC_CALLBACK_WEBHOOK_URL"
    );
    return { ok: false, error: "This form isn't fully configured yet. Please call or email us directly." };
  }

  const payload: Record<string, string> = { ...extra };
  for (const [key, value] of data.entries()) {
    if (key === "website") continue;
    payload[key] = String(value);
  }
  payload.submittedAt = new Date().toISOString();
  payload.pageUrl = window.location.href;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { ok: false, error: "Something went wrong sending that. Please try again or call us directly." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Couldn't reach the server. Check your connection and try again." };
  }
}
