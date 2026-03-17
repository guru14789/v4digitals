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
                            V4 Digitals is a premier visual production studio specializing in high-end commercial photography, cinematic wedding storytelling, and bespoke individual portraiture. Based in our state-of-the-art facility, we partner with brands and individuals to transform life's most significant moments and corporate visions into compelling visual narratives.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            With over a decade of industry excellence, our studio has delivered world-class content ranging from global commercial campaigns to intimate, high-end marriage celebrations. We blend technical precision with creative artistry, ensuring every frame—whether a large-scale production or an individual session—is meticulously crafted.
                        </p>
                        <p>
                            Our team provides a comprehensive suite of services including luxury wedding cinematography, editorial portraits, and full-scale commercial post-production. We are dedicated to innovation, quality, and the pursuit of visual perfection for our diverse portfolio of local and international clients.
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
