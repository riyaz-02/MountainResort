import { motion } from 'framer-motion';
import { Sunrise, Trees, Flame, Bath, Utensils, Map } from 'lucide-react';

const experiences = [
    {
        icon: Sunrise,
        title: "Sunrise View Deck",
        description: "Witness first light through the mist from a private observation deck."
    },
    {
        icon: Trees,
        title: "Guided Forest Walks",
        description: "Curated walks through cedar groves and alpine meadows."
    },
    {
        icon: Flame,
        title: "Fireside Nights",
        description: "Intimate gatherings with storytelling and reserve cellar pairings."
    },
    {
        icon: Bath,
        title: "Spa Rituals",
        description: "Holistic treatments using forest botanicals and spring water."
    },
    {
        icon: Utensils,
        title: "Chef's Table",
        description: "Seasonal tasting menus featuring local orchards and farms."
    },
    {
        icon: Map,
        title: "Cinematic Trails",
        description: "Private trails with panoramic overlooks and curated rest stops."
    }
];

const Experiences = () => {
    return (
        <section id="experiences" className="section-shell bg-background">
            <div className="container mx-auto px-6 text-center mb-16 space-y-4">
                <span className="section-label">Discovery</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary">Unforgettable Moments</h2>
                <p className="text-primary/60 max-w-2xl mx-auto">
                    Thoughtfully crafted rituals designed to slow time, awaken the senses, and deepen your connection with the landscape.
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="p-10 border border-primary/10 hover:border-accent/40 transition-all duration-500 group bg-white/70 backdrop-blur-sm soft-outline"
                    >
                        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                            <exp.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">{exp.title}</h3>
                        <p className="text-primary/60 font-light leading-relaxed">{exp.description}</p>
                        <div className="mt-8 text-[10px] uppercase tracking-[0.4em] text-primary/40">Curated daily</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
