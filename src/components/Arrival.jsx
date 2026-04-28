import { motion } from 'framer-motion';

const Arrival = () => {
    return (
        <section className="section-shell bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="section-label">Arrival Window</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-primary">Kasauli, Himachal Pradesh</h2>
                        <p className="text-primary/60 text-lg leading-relaxed font-light">
                            A 2.5 hour scenic drive from Chandigarh. Private transfers and curated routes are available upon request.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-primary/70">
                            <div className="p-5 border border-primary/10 bg-white/70">
                                <p className="uppercase tracking-[0.3em] text-[10px] text-primary/40">Season</p>
                                <p className="text-lg font-serif">Fog Embrace</p>
                            </div>
                            <div className="p-5 border border-primary/10 bg-white/70">
                                <p className="uppercase tracking-[0.3em] text-[10px] text-primary/40">Culinary</p>
                                <p className="text-lg font-serif">Forest to Table</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden soft-outline card-sheen"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=1400"
                            alt="Lodge interior"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Arrival;
