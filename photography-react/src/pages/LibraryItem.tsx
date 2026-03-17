import React from 'react';
import Header from '../components/Header';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gridPhotos } from '../data/photoData';

const LibraryItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Find photo by slug (extracted from id)
    const photo = gridPhotos.find(p => p.link.split('/').pop() === id);

    if (!photo) {
        return (
            <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Photo Not Found</h1>
                    <Link to="/" style={{ color: 'white', marginTop: '20px' }}>Back to Home</Link>
                </main>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontFamily: 'Inter, sans-serif' }}>
                    <span>←</span> Back to Gallery
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '60px', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
                    >
                        <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ position: 'sticky', top: '150px' }}
                    >
                        <h1 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '48px', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
                            {photo.title}
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '32px' }}>
                            {photo.alt}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</span>
                                <p style={{ fontSize: '16px', marginTop: '4px' }}>Earth, Solar System</p>
                            </div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Camera</span>
                                <p style={{ fontSize: '16px', marginTop: '4px' }}>Sony A7R V • 24mm f/2.8</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '100%',
                                padding: '18px',
                                borderRadius: '14px',
                                border: 'none',
                                backgroundColor: 'white',
                                color: 'black',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '16px',
                                marginTop: '40px',
                                cursor: 'pointer'
                            }}
                        >
                            Purchase Print
                        </motion.button>
                    </motion.aside>
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

export default LibraryItem;
