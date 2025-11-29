// src/components/ProgressBar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  // Calculamos el porcentaje (current es base 0, por eso sumamos 1)
  const progress = ((current + 1) / total) * 100;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '6px', // Altura de la barra
      background: 'rgba(15, 23, 42, 0.6)', // Fondo oscuro semitransparente
      zIndex: 200, // Por encima del fondo pero debajo de modales si los hubiera
      backdropFilter: 'blur(4px)'
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)', // Tu gradiente
          boxShadow: '0 -2px 10px rgba(56, 189, 248, 0.5)', // Brillo hacia arriba
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px'
        }}
      />
    </div>
  );
};

export default ProgressBar;