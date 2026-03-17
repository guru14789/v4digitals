import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture, Menu, X, Image, User, Mail, Twitter, Instagram } from 'lucide-react';

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Gallery', path: '/', icon: <Image size={24} /> },
        { name: 'About', path: '/about', icon: <User size={24} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={24} /> },
    ];

    const menuVariants: any = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
                when: "beforeChildren",
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -50, rotate: -2 },
        open: { opacity: 1, x: 0, rotate: 0 }
    };

    return (
        <header style={{ width: '100%', maxWidth: 'none', position: 'fixed', top: 0, left: 0, zIndex: 100 }}>
            {/* Main Header Buttons (Resting State) */}
            <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                {/* Logo Button */}
                <Link
                    to="/"
                    aria-label="Home"
                    style={{
                        backgroundColor: 'rgba(15, 15, 15, 0.4)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        e.currentTarget.style.backgroundColor = 'rgba(15, 15, 15, 0.4)';
                    }}
                >
                    <Aperture size={30} />
                </Link>

                {/* Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open Menu"
                    style={{
                        backgroundColor: 'rgba(15, 15, 15, 0.4)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = 'rgba(15, 15, 15, 0.4)';
                    }}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(5, 5, 5, 0.98)',
                            backdropFilter: 'blur(30px)',
                            zIndex: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '40px'
                        }}
                    >
                        {/* Overlay Top Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white',
                                    margin: 0,
                                    letterSpacing: '0.05em'
                                }}>V4 DIGITALS</p>
                                <img
                                    src="/images/signature.png"
                                    alt="Signature"
                                    style={{
                                        height: '35px',
                                        marginTop: '-6px',
                                        opacity: 0.9,
                                        filter: 'brightness(0) invert(1)'
                                    }}
                                />
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close Menu"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '50%',
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
                            >
                                <X size={30} />
                            </button>
                        </div>

                        {/* Middle Content */}
                        <div style={{
                            display: 'flex',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 8%'
                        }}>
                            {/* Navigation Links */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {navItems.map((item) => (
                                    <motion.div key={item.name} variants={itemVariants}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                color: location.pathname === item.path ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                                textDecoration: 'none',
                                                fontSize: 'clamp(24px, 4vw, 44px)',
                                                fontWeight: 600,
                                                letterSpacing: '-0.02em',
                                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.transform = 'translateX(15px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (location.pathname !== item.path) {
                                                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
                                                }
                                                e.currentTarget.style.transform = 'translateX(0px)';
                                            }}
                                        >
                                            <span style={{
                                                opacity: location.pathname === item.path ? 1 : 0.5,
                                                transform: 'translateY(2px)'
                                            }}>{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Column */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '40px',
                                paddingRight: '20px'
                            }}>
                                <motion.a variants={itemVariants} href="#" target="_blank" aria-label="Follow us on Twitter" style={{ color: 'rgba(255, 255, 255, 0.4)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.2)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'; e.currentTarget.style.transform = 'scale(1)' }}>
                                    <Twitter size={28} />
                                </motion.a>
                                <motion.a variants={itemVariants} href="#" target="_blank" aria-label="Follow us on Instagram" style={{ color: 'rgba(255, 255, 255, 0.4)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.2)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'; e.currentTarget.style.transform = 'scale(1)' }}>
                                    <Instagram size={28} />
                                </motion.a>
                                <motion.a variants={itemVariants} href="#" target="_blank" aria-label="Send us an Email" style={{ color: 'rgba(255, 255, 255, 0.4)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.2)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'; e.currentTarget.style.transform = 'scale(1)' }}>
                                    <Mail size={28} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                            style={{
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                width: '100%',
                                marginTop: '40px'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
