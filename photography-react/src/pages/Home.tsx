import React from 'react';
import Header from '../components/Header';
import { motion, useScroll, useTransform, useTime, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gridPhotos, columnPhotos } from '../data/photoData';

const Home: React.FC = () => {
    const { scrollY } = useScroll();
    const time = useTime();

    // Physics-based smoothing for the scroll value itself
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 70,
        damping: 30,
        restDelta: 0.01
    });

    // Responsive state
    const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1024;

    // Subtle automatic drift (sine wave movement over time)
    const drift = useTransform(time, (t: number) => Math.sin(t / 2000) * (isMobile ? 15 : 30));
    const driftSlow = useTransform(time, (t: number) => Math.cos(t / 3000) * (isMobile ? 10 : 20));

    // Parallax / Scale effects for opening section (Long Scroll style) - using smoothScrollY
    const openingOpacity = useTransform(smoothScrollY, [1000, 1500], [1, 0]);
    const openingScale = useTransform(smoothScrollY, [0, 2000], [1.1, 0.75]);
    const openingRotateX = useTransform(smoothScrollY, [0, 2000], [0, 15]);

    // Individual column parallax combining Scroll + Drift - using smoothScrollY
    const scroll1Y = useTransform(smoothScrollY, [0, 2000], [0, -250]);
    const scroll2Y = useTransform(smoothScrollY, [0, 2000], [0, 250]);
    const scroll3Y = useTransform(smoothScrollY, [0, 2000], [0, -350]);
    const scroll4Y = useTransform(smoothScrollY, [0, 2000], [0, 250]);
    const scroll5Y = useTransform(smoothScrollY, [0, 2000], [0, -250]);

    // Derived values for animations (Scroll + Drift)
    const col1Y = useTransform([scroll1Y, drift], ([s, d]) => (s as number) + (d as number));
    const col2Y = useTransform([scroll2Y, driftSlow], ([s, d]) => (s as number) + (d as number));
    const col3Y = useTransform([scroll3Y, drift], ([s, d]) => (s as number) - (d as number));
    const col4Y = useTransform([scroll4Y, driftSlow], ([s, d]) => (s as number) - (d as number));
    const col5Y = useTransform([scroll5Y, drift], ([s, d]) => (s as number) + (d as number));

    const titleY = useTransform(smoothScrollY, [0, 1200], [0, -120]);
    const titleScale = useTransform(smoothScrollY, [0, 1200], [1, 0.7]);
    const titleOpacity = useTransform(smoothScrollY, [1000, 1400], [1, 0]);

    const darkOverlayOpacity = useTransform(smoothScrollY, [800, 1500], [0.001, 0.95]);

    return (
        <div className="framer-Xwi5z framer-m64fq2" style={{
            backgroundColor: 'rgb(5, 5, 5)',
            minHeight: '100vh',
            width: '100%',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        }}>
            <Header />

            {/* Scroll Sections for ID targets */}
            <header className="framer-id8sq" id="top" style={{ height: '0px' }}></header>
            <header className="framer-12i5155" id="middle" style={{ height: '0px' }}></header>

            {/* Darken Overlay */}
            <motion.div
                className="framer-s7tlll"
                style={{
                    opacity: darkOverlayOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 5,
                    pointerEvents: 'none',
                    backgroundColor: 'black'
                }}
            />

            {/* Opening Section (Lux Hero Animation) */}
            <motion.div
                id="opening"
                style={{
                    opacity: openingOpacity,
                    scale: openingScale,
                    rotateX: openingRotateX,
                    perspective: '1200px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    backgroundColor: '#050505',
                    transformOrigin: 'center center',
                    overflow: 'hidden'
                }}
            >
                {/* Vignette Mask for depth */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle, transparent 20%, rgba(5,5,5,0.8) 100%)',
                    zIndex: 1
                }} />

                <div style={{
                    display: 'flex',
                    gap: isMobile ? '10px' : '20px',
                    width: '100%',
                    maxWidth: 'none',
                    padding: isMobile ? '0 10px' : '0 20px',
                    transform: isMobile ? 'translateY(0)' : 'translateY(-50px)',
                    zIndex: 0,
                    justifyContent: 'center'
                }}>
                    {/* Column 1 - Hidden on mobile */}
                    {!isMobile && (
                        <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '150px', y: col1Y }}>
                            {columnPhotos.column1.map((photo, i) => (
                                <img key={i} src={photo.src} alt={photo.alt} decoding="async" style={{ width: '100%', borderRadius: '2px', opacity: 0.6 }} />
                            ))}
                        </motion.div>
                    )}
                    {/* Column 2 */}
                    <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '20px', marginTop: isMobile ? '40px' : '40px', y: col2Y }}>
                        {columnPhotos.column2.map((photo, i) => (
                            <img key={i} src={photo.src} alt={photo.alt} decoding="async" style={{ width: '100%', borderRadius: '2px', opacity: 0.6 }} />
                        ))}
                    </motion.div>
                    {/* Column 3 (Center) */}
                    <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '20px', marginTop: isMobile ? '-20px' : '-80px', y: col3Y }}>
                        {columnPhotos.column3.map((photo, i) => (
                            <img key={i} src={photo.src} alt={photo.alt} decoding="async" style={{ width: '100%', borderRadius: '2px', opacity: 0.8 }} />
                        ))}
                    </motion.div>
                    {/* Column 4 */}
                    <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '20px', marginTop: isMobile ? '20px' : '20px', y: col4Y }}>
                        {columnPhotos.column4.map((photo, i) => (
                            <img key={i} src={photo.src} alt={photo.alt} decoding="async" style={{ width: '100%', borderRadius: '2px', opacity: 0.6 }} />
                        ))}
                    </motion.div>
                    {/* Column 5 - Hidden on mobile */}
                    {!isMobile && (
                        <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '120px', y: col5Y }}>
                            {columnPhotos.column5.map((photo, i) => (
                                <img key={i} src={photo.src} alt={photo.alt} decoding="async" style={{ width: '100%', borderRadius: '2px', opacity: 0.6 }} />
                            ))}
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Titles */}
            <motion.div
                style={{
                    opacity: titleOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                    pointerEvents: 'none',
                    y: titleY,
                    scale: titleScale
                }}
            >
                <div style={{ textAlign: 'center', padding: '0 20px', zIndex: 10 }}>
                    <h1 className="framer-text" style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: isMobile ? 'clamp(40px, 15vw, 64px)' : (isTablet ? '80px' : '110px'),
                        fontWeight: 700,
                        color: 'white',
                        letterSpacing: '-0.05em',
                        lineHeight: '0.9em',
                        margin: 0,
                        whiteSpace: isMobile ? 'normal' : 'nowrap'
                    }}>
                        V4 Digitals
                    </h1>
                    <img
                        src="/images/signature.png"
                        alt="Signature"
                        style={{
                            height: isMobile ? '120px' : '200px',
                            marginTop: '-30px', // Pull it up closer to the title
                            opacity: 0.8,
                            filter: 'brightness(0) invert(1)' // Ensure it's white/visible on dark
                        }}
                    />
                </div>

                {/* Scroll Indicator Arrow */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    aria-hidden="true"
                    style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)' }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="scroll-indicator-title">
                        <title id="scroll-indicator-title">Scroll Down</title>
                        <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Main Content (Grid with Specific Spans) */}
            <main style={{ width: '100%', paddingTop: '200vh', position: 'relative', zIndex: 15 }}>
                <section id="grid" style={{
                    padding: isMobile ? '10px' : '20px',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
                    gridAutoFlow: 'dense',
                    gap: isMobile ? '10px' : '20px',
                    width: '100%',
                    maxWidth: 'none',
                    backgroundColor: 'rgb(5, 5, 5)',
                    margin: 0
                }}>
                    {gridPhotos.map((photo, index) => {
                        // Apply specific spans to match reference image
                        let gridStyle: React.CSSProperties = {
                            marginBottom: '0',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            position: 'relative',
                            aspectRatio: 'unset'
                        };

                        if (index === 0 && !isMobile) {
                            gridStyle.gridRow = 'span 2';
                        } else if (index === 1 && !isMobile && !isTablet) {
                            gridStyle.gridColumn = 'span 2';
                        }

                        return (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                style={gridStyle}
                            >
                                <Link
                                    to={photo.link}
                                    aria-label={`View details for ${photo.title}`}
                                    style={{ display: 'block', width: '100%', height: '100%' }}
                                >
                                    <motion.img
                                        src={photo.src}
                                        alt={photo.alt}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                        loading="lazy"
                                        decoding="async"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div className="overlay" style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '30px 20px',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    }}>
                                        <p style={{ color: 'white', margin: 0, fontFamily: '"DM Sans", sans-serif', fontSize: '18px', fontWeight: 500 }}>{photo.title}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </section>

                <footer style={{ padding: '120px 40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontFamily: '"DM Sans", sans-serif' }}>
                    <p style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>© 2026 V4 Digitals</p>
                </footer>
            </main>

            {/* Floating Info (the bottom badge) */}
            <div className="framer-ky8sna-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
                <div className="framer-ky8sna" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '12px 20px', borderRadius: '58px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <p className="framer-text" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'white', margin: 0 }}>
                        V4 Digitals
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
