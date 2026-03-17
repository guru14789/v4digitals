import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { gridPhotos } from '../data/photoData';

const Prints: React.FC = () => {
    return (
        <div className="framer-1CvzJ framer-6ph1du" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', width: '100%', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <header style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(28px, 6vw, 48px)',
                            fontWeight: 700,
                            marginBottom: '16px'
                        }}
                    >
                        Fine Art Prints
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        Bring the beauty of the natural world into your home with these high-quality, limited edition prints.
                    </motion.p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '40px',
                    width: '100%'
                }}>
                    {gridPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: '20px',
                                padding: '16px',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                            whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        >
                            <div style={{ aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{photo.title}</h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                                    Starting at $149
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '10px',
                                        border: 'none',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    }}
                                >
                                    View Options
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <footer style={{ padding: '60px 40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                <p>© 2026 V4 Digitals</p>
            </footer>
        </div>
    );
};

export default Prints;
