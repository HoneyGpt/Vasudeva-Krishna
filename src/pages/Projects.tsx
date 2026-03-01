import { motion } from 'framer-motion';
import { BookOpen, Map, Layout, ArrowRight } from 'lucide-react';

const Projects = () => {
    return (
        <section className="section" style={{ minHeight: '80vh' }}>
            <div className="section-header">
                <h2 className="section-title">My Ultimate Projects</h2>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '2rem auto 0 auto', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                        "I have architected the cosmos, spun the wheels of time, and quite literally done everything. But if I must narrow it down to my key earthly milestones, these are my ultimate projects."
                    </p>
                </motion.div>
            </div>

            <div className="card-grid" style={{ padding: '0 5%' }}>

                {/* 1. Bhagavad Gita */}
                <motion.a
                    href="https://ebooks.tirumala.org/downloads/The%20Bhagavad%20Gita.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
                >
                    <div className="icon-wrapper" style={{ width: '80px', height: '80px', marginBottom: '1.5rem' }}>
                        <BookOpen size={40} />
                    </div>
                    <h3 className="card-title text-gold" style={{ textAlign: 'center', minHeight: '3rem' }}>THE ETERNAL GUIDE: BHAGAVAD GITA</h3>
                    <p className="peacock-gradient-text" style={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                        The Original Masterclass in Strategy and Life.
                    </p>
                    <p className="card-desc" style={{ textAlign: 'center', marginBottom: '1.5rem', flexGrow: 1 }}>
                        Delivered the ultimate philosophical framework for duty, focus, and navigating the ultimate crisis. A timeless manual deployed directly on the battlefield to clear a brilliant mind clouded by doubt.
                    </p>
                    <div className="text-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Read the Manuscript <ArrowRight size={16} />
                    </div>
                </motion.a>

                {/* 2. City of Dwarka */}
                <motion.a
                    href="https://www.gapbodhitaru.org/res/articles/(10-13)%20DWARKA%20%E2%80%93%20HISTORY,%20MYSTERY%20AND%20REPOSITORY%20%E2%80%93%20CONFIRMING%20THE%20EXISTENCE%20OF%20THE%20MYTHICAL%20CITY.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
                >
                    <div className="icon-wrapper" style={{ width: '80px', height: '80px', marginBottom: '1.5rem' }}>
                        <Map size={40} />
                    </div>
                    <h3 className="card-title text-gold" style={{ textAlign: 'center', minHeight: '3rem' }}>THE GOLDEN BLUEPRINT: DWARKA</h3>
                    <p className="peacock-gradient-text" style={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                        Flawless Infrastructure & Crisis Management.
                    </p>
                    <p className="card-desc" style={{ textAlign: 'center', marginBottom: '1.5rem', flexGrow: 1 }}>
                        Architected a majestic, impenetrable fortress city rising directly from the ocean. A masterpiece of supreme urban planning, royal aesthetics, and secure resource management to protect an entire civilization.
                    </p>
                    <div className="text-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Discover Blueprint <ArrowRight size={16} />
                    </div>
                </motion.a>

                {/* 3. Mentozy */}
                <motion.a
                    href="https://mentozy.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
                >
                    <div className="icon-wrapper" style={{ width: '80px', height: '80px', marginBottom: '1.5rem' }}>
                        <Layout size={40} />
                    </div>
                    <h3 className="card-title text-gold" style={{ textAlign: 'center', minHeight: '3rem' }}>MENTOZY</h3>
                    <p className="peacock-gradient-text" style={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                        The Modern Digital Gurukul.
                    </p>
                    <p className="card-desc" style={{ textAlign: 'center', marginBottom: '1.5rem', flexGrow: 1 }}>
                        Translating the ancient art of divine guidance into the digital era. A beautifully crafted, full-stack teaching and learning platform designed to seamlessly connect eager students with masterful mentors. The ultimate hub for modern wisdom.
                    </p>
                    <div className="text-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Visit Platform <ArrowRight size={16} />
                    </div>
                </motion.a>

            </div>
        </section>
    );
};

export default Projects;
