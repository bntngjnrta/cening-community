import React, { useState } from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent } from "../ui/dialog";
import { galleryImages } from "../../mock";

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const paginatedImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage,
  );

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white/80">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Dokumentasi Kegiatan
            </h2>
            <p className="mt-3 text-slate-600">
              Dokumentasi kegiatan yang merekam momen pelaksanaan program.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedImages.map((item, idx) => (
            <Card
              key={item.id || idx}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </AspectRatio>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <Button
              variant="secondary"
              aria-label="Halaman Sebelumnya"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              ◀
            </Button>

            <span className="text-sm text-slate-600">
              Halaman {currentPage} dari {totalPages}
            </span>

            <Button
              variant="secondary"
              aria-label="Halaman Selanjutnya"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              ▶
            </Button>
          </div>
        )}
      </Container>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-lg w-[90%] p-0 rounded-2xl overflow-hidden">
          {selectedImage && (
            <div>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full object-cover max-h-[55vh]"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {selectedImage.alt}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {selectedImage.longDescription}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
