import './index.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReveal } from './hooks/useReveal';
import { Hero } from './components/Hero';
import { ListCard } from './components/ListCard';
import { BonusCard } from './components/BonusCard';
import { CTAButton } from './components/CTAButton';
import { RegistrationModal } from './components/RegistrationModal';
import { ThankYouPage } from './components/ThankYouPage';

declare global {
  interface Window { fbq?: (...args: unknown[]) => void; }
}

function LandingPage() {
  useReveal();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSuccess = async (name: string, phone: string) => {
    setModalOpen(false);

    if (window.fbq) {
      window.fbq('track', 'Lead');
    }

    navigate('/thankyou');

    // Fire-and-forget — foydalanuvchi kutmaydi
    fetch(`${import.meta.env.VITE_API_URL || ''}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    }).catch(() => {});
  };

  return (
    <>
      <div className="page-container" style={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        backgroundColor: '#000',
        overflowX: 'hidden',
        paddingBottom: 40,
      }}>
        <Hero />

        <div className="reveal" style={{ padding: '0 20px', marginTop: -80, position: 'relative', zIndex: 3 }}>
          <CTAButton label="DARSGA QATNASHISH" onClick={handleOpenModal} />
        </div>

        <ListCard />
        <BonusCard />

        <div className="reveal reveal-delay-3" style={{ padding: '14px 20px 0 20px' }}>
          <CTAButton label="DARSGA QATNASHISH" onClick={handleOpenModal} />
        </div>
      </div>

      {modalOpen && (
        <RegistrationModal onClose={handleCloseModal} onSuccess={handleSuccess} />
      )}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  );
}
