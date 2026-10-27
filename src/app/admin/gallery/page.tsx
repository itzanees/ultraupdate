import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Image from "next/image";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

// --- Server Action for Upload ---
async function uploadImage(formData: FormData) {
  "use server";
  if (!(await isAdminAuthenticated())) throw new Error("Unauthorized");

  const file = formData.get("image") as File;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;

  if (!file || file.size === 0) return;

  // Save file to public/uploads/gallery
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${file.name.replace(/\s/g, "-")}`;
  const uploadDir = path.join(process.cwd(), "public/uploads/gallery");
  
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);

  // Save to Database
  await prisma.galleryItem.create({
    data: {
      title,
      category,
      image: `/uploads/gallery/${filename}`,
    },
  });

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}

export default async function AdminGalleryPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const images = await prisma.galleryItem.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-[#050816] p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-8">Gallery Management</h1>

        {/* Upload Form */}
        <form action={uploadImage} className="glass p-6 rounded-2xl mb-10 border border-white/10 flex gap-4 items-end flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm mb-2 text-slate-300">Title</label>
            <input name="title" required className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-slate-300">Category</label>
            <select name="category" className="bg-[#050816] border border-white/10 rounded-lg p-3 text-white">
              <option>Cold Storage Facility</option>
              <option>Sandwich Panel Installation</option>
              <option>Warehouse Cooling System</option>
              <option>Industrial Doors and Shutters</option>
              <option>Coldroom and Warehouse Lighting</option>
              <option>Loading Bay Facilities</option>
              <option>Structural and Civil Works</option>
              <option>Fire Fighting System</option>
              <option>Rack System and Equipment</option>   
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2 text-slate-300">Image</label>
            <input type="file" name="image" accept="image/*" required className="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20" />
          </div>
          <button type="submit" className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-cyan-400">
            Upload
          </button>
        </form>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="glass rounded-xl overflow-hidden border border-white/10 relative aspect-square group">
              <Image src={img.image} alt={img.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-sm font-bold text-center px-2">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}