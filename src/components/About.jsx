import { motion } from 'framer-motion';
import luxuryMountainInterior from '../assets/photos/luxury mountain interior.png';

const About = () => {
    return (
        <section id="about" className="section-shell bg-background">
            <div className="absolute inset-0 ambient-grid opacity-10" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="section-label">Our Story</span>
                            <h2 className="text-4xl md:text-6xl text-primary font-serif leading-tight">
                                A Residency Crafted <br /> For Quiet Power
                            </h2>
                        </div>

                        <p className="text-primary/70 text-lg leading-relaxed font-light">
                            Mist Peaks is a modern mountain estate designed for those who seek clarity. Our architecture is deliberately quiet, letting the forest, stone, and sky take the lead. Inside, every detail is tuned for a calm, tactile experience that feels rare and effortless.
                        </p>

                        <p className="text-primary/70 text-lg leading-relaxed font-light">
                            We combine curated rituals, refined suites, and private nature access to create a retreat that feels both cinematic and grounded. The result is a stay that lingers long after you return.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                            {[
                                { label: "Signature suites", value: "18" },
                                { label: "Wellness rituals", value: "30+" },
                                { label: "Private acres", value: "42" },
                            ].map((stat) => (
                                <div key={stat.label} className="p-4 border border-primary/10 bg-white/60">
                                    <p className="text-2xl font-serif text-primary">{stat.value}</p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary/50">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <button className="secondary-btn">Discover More</button>
                        </motion.div>
                    </motion.div>

                    {/* Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10 aspect-[4/5] overflow-hidden card-sheen soft-outline"
                        >
                            <img
                                src={luxuryMountainInterior}
                                alt="Luxury Mountain Interior"
                                className="w-full h-full object-cover grayscale-[10%] hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 0.12, x: 0 }}
                            className="absolute -top-10 -right-10 text-[12rem] font-serif text-primary pointer-events-none select-none"
                        >
                            M
                        </motion.div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
