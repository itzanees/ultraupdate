import { prisma } from "@/lib/prisma";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Gallery | Ultratek Arabia",
  description: "View our portfolio of cold storage and warehouse construction projects across Saudi Arabia.",
};

export default async function GalleryPage() {
  const images = await prisma.galleryItem.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        eyebrow="Our Portfolio"
        title={<>Project <span className="text-gradient">Showcase</span></>}
        subtitle="A selection of our cold storage, warehouse, and industrial construction projects across the Kingdom."
        backgroundImage="/about-warehouse.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-24 container mx-auto px-6">
        {images.length === 0 ? (
          <p className="text-center text-slate-400">No images uploaded yet.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {images.map((img) => (
              <div key={img.id} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden group relative">
                <Image 
                  src={img.image} 
                  alt={img.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">{img.category}</p>
                    <p className="text-white font-bold text-lg">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}