import { redirect } from "next/navigation";
import { getAdminPassword, setAdminCookie, isAdminAuthenticated } from "@/lib/admin-auth";

async function loginAction(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  if (password !== getAdminPassword()) {
    redirect("/admin/login?error=1");
  }
  await setAdminCookie();
  redirect("/admin/enquiries");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  // Already logged in? Go to enquiries.
  if (await isAdminAuthenticated()) {
    redirect("/admin/enquiries");
  }

  const { error } = await searchParams;
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6">
      <form
        action={loginAction}
        className="w-full max-w-md glass rounded-3xl p-10 border border-white/10"
      >
        <h1 className="text-2xl font-black text-white mb-2">Admin Login</h1>
        <p className="text-sm text-slate-400 mb-8">Ultratek Arabia — Enquiries Panel</p>

        <label className="block text-sm font-semibold text-white mb-2">
          Admin Password
        </label>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full px-4 py-3 rounded-xl bg-[#050816]/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 mb-4"
        />

        {error && (
          <p className="text-sm text-red-400 mb-4">
            Wrong password. Try again.
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold hover:opacity-90 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}