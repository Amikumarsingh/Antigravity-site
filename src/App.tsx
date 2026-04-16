import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InteractiveAssist } from './components/InteractiveAssist';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <InteractiveAssist />
      
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)' }}>© 2026 Antigravity Mobility. Engineered for the Future.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
