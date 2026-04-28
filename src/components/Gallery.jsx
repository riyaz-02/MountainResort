import { motion } from 'framer-motion';
import galleryImage4 from '../assets/photos/Gallery image 4.png';

const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1400",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
        className: "md:col-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
        className: "md:col-span-1",
    },
    {
        src: galleryImage4,
        className: "md:col-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1200",
        className: "md:col-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=1200",
        className: "md:col-span-1",
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="section-shell bg-background">
            <div className="container mx-auto px-6 text-center mb-16 space-y-4">
                <span className="section-label">Gallery</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary">Cinematic Perspectives</h2>
                <p className="text-primary/60 max-w-2xl mx-auto">A visual diary of the light, the fog, and the quiet architecture of Mist Peaks.</p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className={`relative overflow-hidden cursor-pointer group rounded-3xl ${image.className}`}
                        >
                            <img
                                src={image.src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-all duration-500" />
                            <div className="absolute inset-0 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                                <span className="text-white text-xs uppercase tracking-[0.3em] bg-black/40 px-3 py-2 rounded-full backdrop-blur">View Story</span>
                                <span className="text-white/80 text-sm">0{index + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
