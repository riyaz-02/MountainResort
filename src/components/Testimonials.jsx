import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Elena Richardson",
        location: "London, UK",
        text: "The silence here feels intentional. Waking up to mist over the peaks was cinematic and calming at once. Every detail was precise and warm.",
        rating: 5
    },
    {
        name: "Markus Bauer",
        location: "Berlin, Germany",
        text: "Minimalist perfection. The architecture stays quiet so the landscape speaks. The forest spa is world-class and deeply restorative.",
        rating: 5
    },
    {
        name: "Sarah & James",
        location: "Sydney, Australia",
        text: "Our honeymoon felt like it was floating above the world. The private cottage, the cedar tub, the mountain air, it was unforgettable.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section-shell bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
                    <span className="section-label">Guest Stories</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-primary">Voices from the Peaks</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={testi.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="p-8 bg-white/80 border border-primary/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between soft-outline"
                        >
                            <div className="space-y-6">
                                <div className="flex gap-1 text-accent">
                                    {[...Array(testi.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-primary/70 italic font-light leading-relaxed">"{testi.text}"</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
                                <div>
                                    <p className="font-serif text-primary">{testi.name}</p>
                                    <p className="text-xs text-primary/40 tracking-widest uppercase">{testi.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
