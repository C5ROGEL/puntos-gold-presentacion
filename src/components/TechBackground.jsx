import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  // Icono React
  {
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    viewBox: "0 0 24 24",
    top: "10%",
    left: "10%",
    delay: 0
  },
  // Icono Código ( < / > )
  {
    path: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
    viewBox: "0 0 24 24",
    top: "20%",
    left: "80%",
    delay: 2
  },
  // Icono Database
  {
    path: "M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c3.31 0 6 1.12 6 2.5S15.31 9 12 9s-6-1.12-6-2.5S8.69 4 12 4zm0 16c-3.31 0-6-1.12-6-2.5V15c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v2.5c0 1.38-2.69 2.5-6 2.5zm0-5c-3.31 0-6-1.12-6-2.5V10c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v2.5c0 1.38-2.69 2.5-6 2.5z",
    viewBox: "0 0 24 24",
    top: "70%",
    left: "15%",
    delay: 4
  },
  // Icono Hexágono (simulando Node.js/estructuras)
  {
    path: "M21 16.5l-9 5.2-9-5.2v-9l9-5.2 9 5.2v9z",
    viewBox: "0 0 24 24",
    top: "80%",
    left: "75%",
    delay: 1
  }
];

const TechBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0, // Detrás de todo
      pointerEvents: 'none'
    }}>
      {icons.map((icon, index) => (
        <motion.svg
          key={index}
          viewBox={icon.viewBox}
          fill="rgba(56, 189, 248, 0.05)" // Muy sutil
          style={{
            position: 'absolute',
            width: '150px', // Iconos grandes
            height: '150px',
            top: icon.top,
            left: icon.left,
          }}
          animate={{
            y: [0, -30, 0], // Flotar arriba y abajo
            rotate: [0, 10, -10, 0], // Rotación suave
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8 + index, // Duración variable para que no se muevan igual
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay
          }}
        >
          <path d={icon.path} />
        </motion.svg>
      ))}
      
      {/* Añadimos un overlay gradiente extra para profundidad */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />
    </div>
  );
};

export default TechBackground;