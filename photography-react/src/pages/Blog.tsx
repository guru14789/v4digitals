import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: "The Art of Captivating Light",
        date: "Jan 12, 2026",
        category: "Technique",
        excerpt: "Discover how to harness the golden hour and create stunning depth in your landscape photography.",
        image: "/framerusercontent.com/images/mVkL3JPv0fXknKK89jYas9HEF1s7f78.jpg"
    },
    {
        id: 2,
        title: "Gear Guide: My 2026 Setup",
        date: "Jan 5, 2026",
        category: "Gear",
        excerpt: "An in-depth look at the cameras, lenses, and filters I use to capture the world's most remote locations.",
        image: "/framerusercontent.com/images/qIvvc1EqzhmLXzLLVovs1WGUUfcdb.jpg"
    },
    {
        id: 3,
        title: "Post-Processing for Realism",
        date: "Dec 20, 2025",
        category: "Editing",
        excerpt: "How I use Lightroom and Photoshop to enhance natural colors without losing the authentic feel of the scene.",
        image: "/framerusercontent.com/images/74CDdvvdFTlzHLCMUol93mHbpWk077d.jpg"
    }
];

const Blog: React.FC = () => {
    return (
        <div className="framer-1CvzJ framer-6ph1du" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Header />

            <main style={{ paddingTop: '120px', paddingBottom: '100px', width: '100%', maxWidth: '1000px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <header style={{ marginBottom: '80px' }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '56px',
                            fontWeight: 700,
                            letterSpacing: '-2px',
                            marginBottom: '20px'
                        }}
                    >
                        Insights & Stories
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: '600px'
                        }}
                    >
                        A collection of thoughts on photography, travel, and the technical aspects of capturing the world.
                    </motion.p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '40px',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden' }}>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '14px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    <span style={{ color: '#fff' }}>{post.category}</span>
                                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>{post.date}</span>
                                </div>
                                <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>{post.title}</h2>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{post.excerpt}</p>
                                <motion.a
                                    href={`/blog/${post.id}`}
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: 'white',
                                        textDecoration: 'none',
                                        marginTop: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                >
                                    Read Story <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                                </motion.a>
                            </div>
                        </motion.article>
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

export default Blog;
