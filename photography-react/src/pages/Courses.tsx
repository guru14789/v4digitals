import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const courses = [
    {
        id: 1,
        title: "Mastering the Art of Light",
        duration: "6 Hours",
        lessons: 24,
        level: "Intermediate",
        description: "Learn how to see and manipulate light to create emotional and impactful photographs in any environment.",
        image: "/framerusercontent.com/images/mVkL3JPv0fXknKK89jYas9HEF1s7f78.jpg"
    },
    {
        id: 2,
        title: "Landscape Composition Deep Dive",
        duration: "4 Hours",
        lessons: 18,
        level: "All Levels",
        description: "Move beyond the rule of thirds. Learn advanced compositional techniques used by the masters of landscape photography.",
        image: "/framerusercontent.com/images/qIvvc1EqzhmLXzLLVovs1WGUUfcdb.jpg"
    },
    {
        id: 3,
        title: "The Business of Photography",
        duration: "8 Hours",
        lessons: 32,
        level: "Advanced",
        description: "Transform your passion into a career. A comprehensive guide to branding, marketing, and client management.",
        image: "/framerusercontent.com/images/74CDdvvdFTlzHLCMUol93mHbpWk077d.jpg"
    }
];

const Courses: React.FC = () => {
    return (
        <div className="framer-Courses" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
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
                        Education & Workshops
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
                        In-depth learning experiences designed to help you master the craft of photography and develop your unique artistic voice.
                    </motion.p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ scale: 1.01 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '400px 1fr',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                <motion.img
                                    src={course.image}
                                    alt={course.title}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                                    <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '1px' }}>{course.level}</span>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        ● {course.duration}
                                    </span>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        ● {course.lessons} Lessons
                                    </span>
                                </div>
                                <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '32px', fontWeight: 700, marginBottom: '16px', lineHeight: 1.2 }}>{course.title}</h2>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {course.description}
                                </p>
                                <div style={{ marginTop: 'auto' }}>
                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        style={{ background: 'none', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: 0 }}
                                    >
                                        View Course Details <span style={{ transition: 'transform 0.3s ease' }}>→</span>
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

export default Courses;
