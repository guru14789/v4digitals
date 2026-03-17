import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const presetPacks = [
    {
        id: 1,
        name: "Cinematic Landscapes",
        price: "$49",
        description: "Bring a moodier, cinematic feel to your nature and travel shots. Optimized for Sony & Fujifilm systems.",
        image: "/framerusercontent.com/images/74CDdvvdFTlzHLCMUol93mHbpWk077d.jpg",
        features: ["15 Lightroom Presets", "Installation Guide", "RAW samples included"]
    },
    {
        id: 2,
        name: "Golden Hour Essentials",
        price: "$39",
        description: "Warm, soft tones designed specifically for sunrise and sunset photography. Enhances natural light and glow.",
        image: "/framerusercontent.com/images/mVkL3JPv0fXknKK89jYas9HEF1s7f78.jpg",
        features: ["10 Lightroom Presets", "Mobile & Desktop versions", "Lifetime updates"]
    },
    {
        id: 3,
        name: "Pure Portraiture",
        price: "$59",
        description: "Clean, natural skin tones with subtle color grading for professional portraits and street photography.",
        image: "/framerusercontent.com/images/qIvvc1EqzhmLXzLLVovs1WGUUfcdb.jpg",
        features: ["20 Lightroom Presets", "XMP & DNG files", "Video tutorial"]
    }
];

const Presets: React.FC = () => {
    return (
        <div className="framer-Presets" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', width: '100%', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(36px, 8vw, 64px)',
                            fontWeight: 700,
                            letterSpacing: '-3px',
                            marginBottom: '20px'
                        }}
                    >
                        Edit Like a Pro
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '20px',
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        Professional Lightroom presets designed to streamline your workflow and give your photos a consistent, high-end look.
                    </motion.p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {presetPacks.map((pack, index) => (
                        <motion.div
                            key={pack.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src={pack.image} alt={pack.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '28px', fontWeight: 700 }}>{pack.name}</h2>
                                    <span style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>{pack.price}</span>
                                </div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '30px' }}>
                                    {pack.description}
                                </p>
                                <div style={{ marginTop: 'auto' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {pack.features.map(f => (
                                            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                                                <span style={{ color: '#fff' }}>✓</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ backgroundColor: 'white', color: 'black' }}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            borderRadius: '12px',
                                            border: '1px solid white',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Get Preset Pack
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
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

export default Presets;
