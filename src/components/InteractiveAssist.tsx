import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveAssist = () => {
  const [effort, setEffort] = useState(50);
  
  const userStrain = 100 - effort;
  const motorAssist = effort;
  
  return (
    <section className="interactive" style={{ background: 'rgba(112, 0, 255, 0.02)', padding: '10rem 0' }}>
      <div className="container">
        <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The <span className="gradient-text">Feeling</span> of Antigravity</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Slide to see how our Smart Torque Assist balances your effort with near-instantaneous power delivery.
            </p>
            
            <div style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--primary)' }}>ADJUST ASSIST LEVEL</label>
                <span style={{ fontWeight: 'bold' }}>{motorAssist}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={effort}
                onChange={(e) => setEffort(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)', height: '8px', cursor: 'pointer' }}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>YOUR STRAIN</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{userStrain}%</div>
              </div>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderColor: 'rgba(0, 242, 255, 0.3)', background: 'rgba(0, 242, 255, 0.05)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>MOTOR ASSIST</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>{motorAssist}%</div>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative', height: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div 
              style={{ 
                width: '100%', 
                height: '100%', 
                maxWidth: '300px',
                maxHeight: '300px',
                borderRadius: '50%', 
                background: `radial-gradient(circle, var(--primary) 0%, transparent ${effort}%)`,
                opacity: 0.2,
                filter: 'blur(50px)',
                position: 'absolute'
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <div style={{ zIndex: 1, textAlign: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={effort > 80 ? 'hyper' : effort > 30 ? 'balanced' : 'active'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}
                >
                  {effort > 80 ? "🚀 NEAR EFFORTLESS" : effort > 30 ? "⚡ BALANCED FLOW" : "💪 ACTIVE ENGAGEMENT"}
                </motion.div>
              </AnimatePresence>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Simulated User Perception</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
