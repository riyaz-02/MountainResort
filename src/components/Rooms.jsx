import { motion } from 'framer-motion';
import luxuryMountainInterior from '../assets/photos/luxury mountain interior.png';
import forestViewCottage from '../assets/photos/forest view Cottage.png';

const rooms = [
    {
        title: "Mist View Atelier",
        description: "Minimalist suite with floor-to-ceiling glazing and a private tea balcony.",
        price: "INR 28,000 / night",
        image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1000",
        tag: "Panoramic valley",
    },
    {
        title: "Summit Panorama Suite",
        description: "A refined corner suite with 270-degree views and a sculpted stone hearth.",
        price: "INR 46,000 / night",
        image: luxuryMountainInterior,
        tag: "Signature suite",
    },
    {
        title: "Forest Glass Cottage",
        description: "Private forest escape with a cedar tub and open-sky lounge deck.",
        price: "INR 38,000 / night",
        image: forestViewCottage,
        tag: "Private deck",
    },
    {
        title: "Aurora Honeymoon Loft",
        description: "A secluded loft with a heated plunge pool and mist-wrapped balcony.",
        price: "INR 68,000 / night",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
        tag: "Pool suite",
    },
];

const Rooms = () => {
    return (
        <section id="rooms" className="section-shell bg-primary text-background">
            <div className="absolute inset-0 ambient-grid opacity-10" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="section-label">Accommodations</span>
                        <h2 className="text-4xl md:text-6xl font-serif">Suites That Breathe</h2>
                    </div>
                    <p className="text-background/60 max-w-md font-light">
                        Each residence is tuned with organic materials, warm tactility, and views that shift with the fog.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[16/10] mb-6 card-sheen soft-outline">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.4em] text-white/80 border border-white/30 px-4 py-2 bg-black/20">
                                    {room.tag}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">{room.title}</h3>
                                        <p className="text-background/60 font-light max-w-sm">{room.description}</p>
                                    </div>
                                    <span className="text-accent font-serif text-lg whitespace-nowrap">{room.price}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Breakfast and transfers included</p>
                                    <button className="text-xs uppercase tracking-[0.3em] text-accent hover:text-white transition-colors">View details</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
