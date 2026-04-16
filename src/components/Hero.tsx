import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-glow" style={{ top: '-10%', right: '-10%' }}></div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1', marginBottom: '1.5rem' }}>
            Mobility, <br />
            <span className="gradient-text">Redefined.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Experience the "effortless" sensation of weightlessness. The Antigravity Mobility Device combines aerospace engineering with smart-torque assistance to eliminate the strain of movement.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">Reserve Now</button>
            <button style={{ background: 'transparent', border: '1px solid var(--border-color)', padding: '1rem 2rem', borderRadius: '12px', color: 'white', cursor: 'pointer' }}>
              View Specs
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', width: '100%' }}
        >
          <div className="glass" style={{ padding: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img 
              src="/hero.png" 
              alt="Antigravity Mobility Device" 
              style={{ width: '100%', borderRadius: '12px', display: 'block', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', textAlign: 'center', background: 'rgba(0, 242, 255, 0.05)', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid rgba(0, 242, 255, 0.2)' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '0.1em' }}>32 LBS TOTAL WEIGHT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
