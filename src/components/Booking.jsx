import { motion } from 'framer-motion';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';

const Booking = () => {
    return (
        <section id="booking" className="section-shell relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2000"
                    alt="Resort View"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-[4px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto glass-panel p-8 md:p-14 lg:p-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
                        <div className="space-y-6">
                            <span className="section-label text-white/70">Reservations</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-background">Begin Your Journey</h2>
                            <p className="text-background/60 font-light text-lg leading-relaxed">
                                Secure your sanctuary in the mist. Choose your suite, align your dates, and let our concierge orchestrate the rest.
                            </p>
                            <div className="space-y-4 text-sm text-white/70">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="uppercase tracking-[0.3em] text-[10px] text-white/50">Concierge</span>
                                    <span>Available 24/7</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="uppercase tracking-[0.3em] text-[10px] text-white/50">Private transfers</span>
                                    <span>Chandigarh and Shimla</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="uppercase tracking-[0.3em] text-[10px] text-white/50">Signature rituals</span>
                                    <span>Included with stay</span>
                                </div>
                            </div>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-accent/70 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> Check In
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors appearance-none text-lg"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-accent/70 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> Check Out
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors appearance-none text-lg"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-accent/70 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                                    <Home className="w-3 h-3" /> Room Type
                                </label>
                                <select className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors text-lg cursor-pointer">
                                    <option className="bg-primary text-white">Mist View Atelier</option>
                                    <option className="bg-primary text-white">Summit Panorama Suite</option>
                                    <option className="bg-primary text-white">Forest Glass Cottage</option>
                                    <option className="bg-primary text-white">Aurora Honeymoon Loft</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-accent/70 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                                    <Users className="w-3 h-3" /> Guests
                                </label>
                                <select className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors text-lg cursor-pointer">
                                    <option className="bg-primary text-white font-bold">1 Guest</option>
                                    <option className="bg-primary text-white font-bold">2 Guests</option>
                                    <option className="bg-primary text-white font-bold">3 Guests</option>
                                    <option className="bg-primary text-white font-bold">4 Guests</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 mt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full premium-btn flex items-center justify-center gap-4 py-6 text-base group shadow-2xl"
                                >
                                    Reserve Your Stay
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Booking;
