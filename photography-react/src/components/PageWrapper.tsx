import React from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
