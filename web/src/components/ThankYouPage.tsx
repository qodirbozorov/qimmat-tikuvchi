import { GOLD } from '../constants/colors';

export function ThankYouPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100dvh',
      padding: 20,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
        maxWidth: 420,
      }}>
        
        {/* Title */}
        <h1 style={{
          fontFamily: "'Cormorant Unicase', serif",
          fontWeight: 700,
          fontSize: 'clamp(26px, 7vw, 34px)',
          color: GOLD,
          margin: 0,
          lineHeight: 1.2,
          textTransform: 'uppercase',
        }}>
          OXIRGI QADAM QOLDI!
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 'clamp(15px, 4vw, 17px)',
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
          lineHeight: 1.5,
        }}>
          Bepul <strong style={{ color: '#fff' }}>2 kunlik</strong> yopiq darslarda qatnashish uchun pastdagi tugmani bosib, telegram kanalga <strong style={{ color: GOLD }}>obuna bo'ling!</strong>
        </p>

        {/* Downward Arrow */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: 10,
          marginBottom: 10,
        }}>
          <div style={{ width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.4)' }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: -4 }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* CTA Button Link */}
        <a
          href="https://t.me/tikuvchilik_formulasi"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'clamp(60px, 16cqw, 72px)',
            borderRadius: 12,
            textDecoration: 'none',
          }}
        >
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(15px, 4.2cqw, 18px)',
            letterSpacing: '0.02em',
            color: GOLD,
          }}>
            OBUNA BO'LING!
          </span>
        </a>
        
      </div>
    </div>
  );
}