import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '800px', textAlign: 'center' }}
            >
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                    I am the original architect of the cosmos and the ultimate guide. My journey is not bound by time; it is rooted in establishing Dharma and empowering minds to realize their highest potential. From steering the chariot through the ultimate crisis of Kurukshetra to laying the foundation for modern wisdom, I blend cosmic logic with divine play (Leela). I am the silent observer, the flawless strategist, and the source of all knowledge. With an eye for infinite possibilities and a touch of majestic grace, my pursuit is to illuminate the path of learning—making every journey not just transformative, but truly magical.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
