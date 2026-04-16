import { motion } from 'framer-motion';
import { Feather, Zap, Battery, Shield } from 'lucide-react';

const features = [
  {
    icon: <Feather size={40} color="#00f2ff" />,
    title: "Featherweight Frame",
    description: "Constructed from aerospace-grade aluminum and injection-molded carbon fiber. Only 32 lbs."
  },
  {
    icon: <Zap size={40} color="#00f2ff" />,
    title: "Smart Torque Assist",
    description: "Proportional power delivery that makes inclines feel like flat ground. Seamlessly invisible."
  },
  {
    icon: <Battery size={40} color="#00f2ff" />,
    title: "Quick-Swap Power",
    description: "Airline-approved battery modules that swap in seconds. Never run out of range."
  },
  {
    icon: <Shield size={40} color="#00f2ff" />,
    title: "Safety First",
    description: "Active auto-braking on hills and biometric fatigue monitoring for a worry-free ride."
  }
];

export const Features = () => {
  return (
    <section className="features" style={{ paddingTop: '10rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Engineered for <span className="gradient-text">Effortless</span> Living
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Every component is optimized for weight reduction and power efficiency.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ marginBottom: '2rem', background: 'rgba(0, 242, 255, 0.05)', padding: '1.5rem', borderRadius: '50%' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
