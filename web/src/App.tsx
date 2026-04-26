import './index.css';
import { useReveal } from './hooks/useReveal';
import { Hero } from './components/Hero';
import { ListCard } from './components/ListCard';
import { BonusCard } from './components/BonusCard';
import { CTAButton } from './components/CTAButton';

export default function App() {
  useReveal();

  // ─── CTA handlers — wire up to your backend here ───────────────
  const handleJoinClass = () => {
    // TODO: open registration form / send to backend
    console.log('Darsga qatnashish clicked');
  };

  const handleGetBonus = () => {
    // TODO: open bonus form / send to backend
    console.log('Bonusni olish clicked');
  };
  // ────────────────────────────────────────────────────────────────

  return (
    <div className="page-container" style={{
      position: 'relative',
      width: '100%',
      maxWidth: 520,
      backgroundColor: '#000',
      overflowX: 'hidden',
      paddingBottom: 40,
    }}>
      {/* ── Hero section ── */}
      <Hero />

      {/* ── CTA 1: Darsga qatnashish ── */}
      <div className="reveal" style={{ padding: '0 20px' }}>
        <CTAButton label="DARSGA QATNASHISH" onClick={handleJoinClass} />
      </div>

      {/* ── List card ── */}
      <ListCard />

      {/* ── Bonus card ── */}
      <BonusCard />

      {/* ── CTA 2: Bonusni olish ── */}
      <div className="reveal reveal-delay-3" style={{ padding: '14px 20px 0 20px' }}>
        <CTAButton label="BONUSNI OLISH" onClick={handleGetBonus} />
      </div>
    </div>
  );
}
