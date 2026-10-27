import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export default async function EnquiriesPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#050816] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">Enquiries</h1>
            <p className="text-slate-400 text-sm mt-1">
              {enquiries.length} total ·{" "}
              {enquiries.filter((e) => e.status === "NEW").length} new
            </p>
          </div>
          <a href="/admin/gallery" className="px-4 py-2 rounded-xl border border-white/10 text-white text-sm hover:bg-white/5">Gallery</a>
          <form
            action={async () => {
              "use server";
              const { clearAdminCookie } = await import("@/lib/admin-auth");
              await clearAdminCookie();
              redirect("/admin/login");
            }}
          >
            <button
              type="submit"
              className="px-4 py-2 rounded-xl border border-white/10 text-white text-sm hover:bg-white/5 transition"
            >
              Sign Out
            </button>
          </form>
        </div>

        {enquiries.length === 0 ? (
          <div className="glass rounded-3xl p-12 border border-white/10 text-center">
            <p className="text-slate-400">No enquiries yet.</p>
            <p className="text-slate-500 text-sm mt-2">
              Submissions from the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {enquiries.map((e) => (
              <div
                key={e.id}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-lg font-bold text-white">
                        {e.name}
                      </h2>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                          e.status === "NEW"
                            ? "bg-red-500/20 text-red-300"
                            : "bg-slate-500/20 text-slate-300"
                        }`}
                      >
                        {e.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">
                      <a
                        href={`mailto:${e.email}`}
                        className="hover:text-cyan-400"
                      >
                        {e.email}
                      </a>
                      {e.phone && (
                        <>
                          {" · "}
                          <a
                            href={`tel:${e.phone}`}
                            className="hover:text-cyan-400"
                          >
                            {e.phone}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 whitespace-nowrap">
                    {new Date(e.createdAt).toLocaleString("en-SA", {
                      timeZone: "Asia/Riyadh",
                    })}
                  </p>
                </div>

                <p className="text-sm font-semibold text-cyan-400 mb-2">
                  {e.subject}
                </p>
                <p className="text-slate-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {e.message}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
                  <a
                    href={`mailto:${e.email}?subject=Re: ${encodeURIComponent(
                      e.subject
                    )}`}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold hover:bg-cyan-500/30 transition"
                  >
                    Reply by Email
                  </a>
                  {e.phone && (
                    <a
                      href={`https://wa.me/${e.phone.replace(
                        /[^0-9]/g,
                        ""
                      )}?text=${encodeURIComponent(
                        `Hello ${e.name}, this is Ultratek Arabia. We received your enquiry about "${e.subject}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold hover:bg-emerald-500/30 transition"
                    >
                      Reply on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}