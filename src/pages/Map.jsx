import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPage = () => {
    return (
        <section className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-accent transition-colors uppercase tracking-[0.2em] text-xs font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="section-label">Location</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary">Find Your Way</h1>
                    <p className="text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Mist Peaks sits above Kasauli in Himachal Pradesh, accessible via a scenic drive from Chandigarh.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 bg-white border border-primary/10 shadow-xl space-y-6">
                            <h3 className="text-2xl font-serif text-primary">Mist Peaks Resort</h3>

                            <div className="space-y-4 font-light text-primary/70">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>1288 Ridgeview Road,<br />Kasauli, Himachal Pradesh 173204, India</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>+91 98100 44321</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>concierge@mistpeaks.in</span>
                                </div>
                                <div className="flex items-start gap-4 border-t border-primary/5 pt-6 mt-6">
                                    <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                                    <div>
                                        <p className="font-serif text-primary mb-1 text-sm uppercase tracking-wider">Check-in / Check-out</p>
                                        <p>Check-in: 02:00 PM</p>
                                        <p>Check-out: 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="premium-btn w-full">Get Directions</button>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2 h-[600px] w-full bg-secondary/20 border border-primary/5 overflow-hidden shadow-2xl relative"
                    >
                        {/* Embedded Google Map Placeholder - In a real app, this would be an iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.163182246807!2d77.9508965!3d30.900966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39052a8c74c5d0d1%3A0x9a8b4a4b6dbd4c1e!2sKasauli%2C%20Himachal%20Pradesh%20173204!5e0!3m2!1sen!2sin!4v1710000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[20%] contrast-[1.1]"
                        ></iframe>

                        {/* Visual Decorative Overlay */}
                        <div className="absolute inset-0 pointer-events-none border-[20px] border-background/50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapPage;
