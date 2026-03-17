import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="framer-1CvzJ framer-6ph1du" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
                {/* Profile Section */}
                <section style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: '0 auto 40px',
                            border: '2px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <img
                            src="/framerusercontent.com/images/25HQu46xrzghEDOA6VSbNI8aM3141.jpg"
                            alt="V4 Digitals"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(32px, 7vw, 56px)',
                            fontWeight: 700,
                            letterSpacing: '-2px',
                            marginBottom: '20px'
                        }}
                    >
                        V4 Digitals
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.6',
                            color: 'rgba(255,255,255,0.7)',
                            textAlign: 'left'
                        }}
                    >
                        <p style={{ marginBottom: '20px' }}>
                            I’m a photographer and filmmaker based in the Pacific Northwest. My work is driven by a deep appreciation for the natural world and the stories that emerge from our connection to it.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Over the last decade, I’ve traveled across six continents, capturing the raw beauty of remote landscapes and the quiet moments of human experience. My goal is to transport the viewer to these places and evoke the same sense of awe and wonder I felt when I was there.
                        </p>
                        <p>
                            When I’m not behind the lens, you can find me hiking with my dog, exploring new coffee shops, or teaching workshops on digital storytelling.
                        </p>
                    </motion.div>
                </section>

                {/* Contact/Socials */}
                <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
                    {[
                        { name: 'Instagram', url: '#' },
                        { name: 'Twitter', url: '#' },
                        { name: 'Email', url: 'mailto:hello@v4digitals.com' },
                        { name: 'Get in Touch', url: '/contact' }
                    ].map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.url}
                            aria-label={`Visit our ${item.name}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            style={{
                                textDecoration: 'none',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '12px 24px',
                                borderRadius: '30px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backgroundColor: item.name === 'Get in Touch' ? 'white' : 'rgba(255,255,255,0.05)',
                                color: item.name === 'Get in Touch' ? 'black' : 'white'
                            }}
                            whileHover={{
                                backgroundColor: item.name === 'Get in Touch' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)',
                                scale: 1.05
                            }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </section>
            </main>

            <footer style={{ padding: '60px 40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                <p>© 2026 V4 Digitals</p>
            </footer>
        </div>
    );
};

export default About;
