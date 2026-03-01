import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
                <h2 className="section-title">REACH OUT</h2>
            </div>

            <motion.div
                className="glass-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem 3rem',
                    textAlign: 'center',
                    gap: '3rem'
                }}
            >
                <motion.div
                    animate={{
                        textShadow: [
                            "0px 0px 4px rgba(255, 255, 255, 0.2)",
                            "0px 0px 12px rgba(212, 175, 55, 0.6)",
                            "0px 0px 4px rgba(255, 255, 255, 0.2)"
                        ],
                        color: ["#e0e6ed", "#fdf6e3", "#e0e6ed"]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        fontSize: '1.4rem',
                        lineHeight: '2.2',
                        fontFamily: "'Outfit', sans-serif", // using the clean sans-serif requested
                        fontWeight: 300,
                        letterSpacing: '1px'
                    }}
                >
                    "I am everywhere. Even behind you, perhaps.<br /><br />
                    Close your eyes, breathe with devotion, and you will hear me.<br />
                    You will see me, and you will believe me.<br /><br />
                    You don't need a contact card to reach me. I am listening.<br />
                    Ask with faith and trust, and you will be heard."
                </motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        filter: [
                            "drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))",
                            "drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))",
                            "drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ color: 'var(--color-gold)' }}
                >
                    <Flower size={48} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
