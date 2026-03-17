import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const gearCategories = [
    {
        title: "Cameras",
        items: [
            { name: "Sony A7R V", description: "61MP Full-frame Mirrorless Camera", link: "#" },
            { name: "Sony Alpha 7S III", description: "Low-light & Video Specialist", link: "#" },
            { name: "Fujifilm X100V", description: "Street photography & Everyday carry", link: "#" }
        ]
    },
    {
        title: "Lenses",
        items: [
            { name: "Sony 16-35mm f/2.8 GM II", description: "Main landscapes & wide-angle", link: "#" },
            { name: "Sony 24-70mm f/2.8 GM II", description: "The versatile workhorse", link: "#" },
            { name: "Sony 70-200mm f/2.8 GM OSS II", description: "Telephoto landscapes & detail", link: "#" },
            { name: "Sony 50mm f/1.2 GM", description: "Portraiture & low-light", link: "#" }
        ]
    },
    {
        title: "Accessories",
        items: [
            { name: "Shimoda Action X50", description: "The ultimate camera backpack", link: "#" },
            { name: "Peak Design Carbon Fiber Tripod", description: "Lightweight stable travel tripod", link: "#" },
            { name: "PolarPro Helix MagLock Filters", description: "Essential ND & CPL filters", link: "#" }
        ]
    }
];

const Gear: React.FC = () => {
    return (
        <div className="framer-Gear" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', width: '100%', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(32px, 7vw, 56px)',
                            fontWeight: 700,
                            letterSpacing: '-2px',
                            marginBottom: '20px'
                        }}
                    >
                        My Photography Kit
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.6)',
                            margin: '0 auto'
                        }}
                    >
                        The tools I use to capture my vision. Chosen for reliability and image quality in extreme conditions.
                    </motion.p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                    {gearCategories.map((category, catIndex) => (
                        <motion.section
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (catIndex * 0.1) }}
                        >
                            <h2 style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '24px',
                                fontWeight: 600,
                                marginBottom: '24px',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '12px'
                            }}>
                                {category.title}
                            </h2>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {category.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                        style={{
                                            padding: '20px',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            transition: 'background-color 0.2s ease'
                                        }}
                                    >
                                        <div>
                                            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600 }}>{item.name}</h3>
                                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{item.description}</p>
                                        </div>
                                        <a href={item.link} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>↗</a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </main>

            <footer style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                    © 2026 V4 Digitals
                </p>
            </footer>
        </div>
    );
};

export default Gear;
