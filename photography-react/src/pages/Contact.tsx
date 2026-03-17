import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Mail, Instagram, Twitter, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div>
            <Header />

            <div style={{
                minHeight: '100vh',
                backgroundColor: 'rgb(5, 5, 5)',
                color: 'white',
                padding: '120px 20px 80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        marginBottom: '10px',
                        letterSpacing: '-0.02em'
                    }}>Get in touch</h1>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        For collaborations, prints, or just to say hello. Let's create something extraordinary together.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    width: '100%',
                    maxWidth: '1100px',
                    marginTop: '20px'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px'
                        }}
                    >
                        <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'white' }}>Connect</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <a href="mailto:hello@v4digitals.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                                        <Mail size={18} />
                                    </div>
                                    hello@v4digitals.com
                                </a>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                                        <Instagram size={18} />
                                    </div>
                                    @v4digitals
                                </a>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                                        <Twitter size={18} />
                                    </div>
                                    @v4digitals_official
                                </a>
                            </div>
                        </div>

                        <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'white' }}>Inquiries</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6 }}>
                                For commercial projects and licensing, please include as much detail as possible about your project requirements.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            padding: '40px',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                style={{
                                    padding: '15px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: 'white',
                                    outline: 'none',
                                    fontSize: '16px'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>Email</label>
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{
                                    padding: '15px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: 'white',
                                    outline: 'none',
                                    fontSize: '16px'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>Message</label>
                            <textarea
                                placeholder="How can we help?"
                                rows={5}
                                style={{
                                    padding: '15px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'none',
                                    fontSize: '16px'
                                }}
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: 'white', color: 'black' }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                marginTop: '10px',
                                padding: '16px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );

};

export default Contact;
