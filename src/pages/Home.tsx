import { motion } from 'framer-motion';
import { Target, Castle, Music, Feather } from 'lucide-react';
import centerImage from '../assets/krishna_flute.png';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-layout">
                    <motion.div className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <img
                            src={centerImage}
                            alt="Divine Art"
                            className="hero-center-image"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">THE DHARMA OF LEADERSHIP</h2>
                    <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                        Guiding organizations through chaos into perfect harmony and flawless execution.
                    </p>
                </div>

                <div className="card-grid" style={{ padding: '0 5%' }}>
                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="icon-wrapper" style={{ overflow: 'hidden' }}>
                            <Target size={28} className="spin-slow" />
                        </div>
                        <h3 className="card-title text-gold" style={{ fontSize: '1.2rem', minHeight: '3rem' }}>CHIEF STRATEGY & CRISIS ADVISOR</h3>
                        <p className="card-desc">
                            Expert in navigating unprecedented business crises and complex conflicts. Masterminded flawless strategies during the ultimate Kurukshetra war through a keen monitoring of current trends, unparalleled foresight, and unwavering dharma.
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="icon-wrapper">
                            <Castle size={28} />
                        </div>
                        <h3 className="card-title text-gold" style={{ fontSize: '1.2rem', minHeight: '3rem' }}>FLAWLESS ORGANIZATIONAL MANAGEMENT</h3>
                        <p className="card-desc">
                            Ran an entire empire seamlessly without a single flaw. Architect of the golden city of Dwarka, demonstrating supreme operational leadership, resource allocation, and the ability to manage vast, multi-talented teams across diverse domains.
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="icon-wrapper" style={{ display: 'flex', gap: '5px' }}>
                            <Music size={22} style={{ transform: 'rotate(-15deg)' }} />
                            <Feather size={20} style={{ transform: 'rotate(15deg)', color: 'var(--color-peacock-light)' }} />
                        </div>
                        <h3 className="card-title text-gold" style={{ fontSize: '1.2rem', minHeight: '3rem' }}>HARMONY & MULTI-DISCIPLINARY MASTERY</h3>
                        <p className="card-desc">
                            A true polymath with supreme emotional intelligence. Renowned as an expert in flute playing, bringing divine rhythm, focus, and harmony to any high-stress environment. Captivates audiences and instantly boosts team morale through the perfect balance of art and strategy.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
