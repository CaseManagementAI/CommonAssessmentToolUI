import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

function LandingPage() {
    const [offsetY, setOffsetY] = useState(0); 

    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <Box sx={{ 
            width: '100%', 
            minHeight: '100vh', 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#f7f7f7' 
        }}>
            <Typography
                variant="h2"
                component="h1"
                gutterBottom
                textAlign="center"
                sx={{
                    position: 'fixed',
                    top: `calc(50% - ${offsetY * 0.5}px)`, 
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 1 - Math.min(1, offsetY / 300), 
                    transition: 'opacity 0.2s',
                }}
            >
                Intervention Predictor
            </Typography>
            <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom 
                textAlign="center"
                sx={{
                    position: 'fixed',
                    top: `calc(60% - ${offsetY * 0.5}px)`,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 1 - Math.min(1, offsetY / 300),
                    transition: 'opacity 0.2s',
                }}
            >
                Know more about the candidate's employment potential and intervention recommendations
            </Typography>
        </Box>
    );
}

export default LandingPage;
