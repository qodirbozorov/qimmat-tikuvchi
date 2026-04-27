import { GOLD } from '../constants/colors';

export function ThankYouPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: 20,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        textAlign: 'center',
      }}>
        {/* Checkmark */}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: `2px solid ${GOLD}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Unicase', serif",
          fontWeight: 600,
          fontSize: 'clamp(20px, 5vw, 28px)',
          color: GOLD,
          margin: 0,
          lineHeight: 1.3,
        }}>
          Muvaffaqiyatli ro'yxatdan o'tdingiz
        </h1>

        <p style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 14,
          color: 'rgba(255,255,255,0.6)',
          margin: 0,
          lineHeight: 1.5,
        }}>
          Tez orada siz bilan bog'lanamiz
        </p>
      </div>
    </div>
  );
}
