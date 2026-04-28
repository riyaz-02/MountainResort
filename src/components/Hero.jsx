import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useSeasonalFog } from '../hooks/useSeasonalFog';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { isFoggySeason } = useSeasonalFog();
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12, duration: 0.8, ease: 'easeOut' },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-primary text-background">
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.14] }}
                    transition={{ duration: 16, repeat: Infinity, repeatType: "alternate", ease: "easeInOut" }}
                    className="relative h-full w-full"
                >
                    <img
                        src={isFoggySeason
                            ? "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
                            : "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2070"}
                        alt="Mountain Lodge"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/55 to-primary/15" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
                    <div className="absolute inset-0 ambient-grid opacity-15" />
                </motion.div>
            </div>

            {isFoggySeason && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{ x: ['-5%', '5%'], y: ['0%', '2%'] }}
                        transition={{ duration: 32, repeat: Infinity, repeatType: "alternate", ease: "linear" }}
                        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fog.png')] opacity-25 mix-blend-screen scale-150"
                    />
                </div>
            )}

            <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl mx-auto space-y-8 text-center"
                >
                    <motion.div variants={itemVariants} className="accent-pill">
                        Alpine retreat, redefined
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight headline-shadow"
                    >
                        {isFoggySeason ? "Escape Into\nThe Mist" : "Nature In Its\nPurest Form"}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Mist Peaks is a sculpted sanctuary where cinematic landscapes meet artful hospitality. Designed for slow mornings, curated rituals, and deep stillness.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link to="/#booking" className="premium-btn group text-white">
                            Book Your Stay
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/#rooms"
                            className="secondary-btn bg-white/10 text-white border-white/40 hover:bg-white/20"
                        >
                            Explore Rooms
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ChevronDown className="text-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
};

const ChevronRight = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default Hero;
