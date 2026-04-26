import { GOLD } from '../constants/colors';
import { CalendarIcon, ClockIcon } from './Icons';

export function Hero() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '375 / 578',
      overflow: 'hidden',
    }}>

      {/* Background image */}
      <div style={{
        position: 'absolute', left: 0, top: '-0.13%',
        width: '100%', height: '103.75%',
        background: 'url(/assets/bg-hero.webp) center / cover no-repeat',
      }} />

      {/* Top gradient overlay */}
      <div style={{
        position: 'absolute', left: 0, top: 0,
        width: '100%', height: '22.5%',
        background: 'linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)',
      }} />

      {/* Bottom gradient overlay */}
      <div style={{
        position: 'absolute', left: 0, top: '77.5%',
        width: '100%', height: '22.5%',
        background: 'linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)',
      }} />

      {/* Pills row */}
      <div className="reveal" style={{
        position: 'absolute', left: '8.5%', top: '3.4%',
        display: 'flex', flexDirection: 'row',
        gap: 'clamp(5px, 2cqw, 9px)',
      }}>
        <div className="pill">VEBINAR</div>
        <div className="pill" style={{ gap: 'clamp(5px, 1.9cqw, 8px)' }}>
          <CalendarIcon />
          <span>6-7 MAY</span>
        </div>
        <div className="pill" style={{ gap: 'clamp(5px, 1.9cqw, 8px)' }}>
          <ClockIcon />
          <span>20:00</span>
        </div>
      </div>

      {/* Logo SVG — 30% smaller, centered */}
      <div className="reveal reveal-delay-1" style={{
        position: 'absolute', left: '17.9%', top: '12.7%',
        width: '64.3%', zIndex: 0,
      }}>
        <img src="/assets/logo.svg" alt="QIMMAT TIKUVCHI" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Expert transparent PNG — 10% smaller */}
      <div style={{
        position: 'absolute', left: '10%', top: '27%',
        width: '77.8%', height: '67.3%',
        zIndex: 1, overflow: 'hidden',
      }}>
        <img
          src="/assets/expert.webp"
          alt="Muqaddas Komilova"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      </div>

      {/* Expert info card — compact */}
      <div className="float-card" style={{
        position: 'absolute',
        left: '32%', right: '12%', bottom: '12%',
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.88)',
        border: `1px solid ${GOLD}`,
        padding: 'clamp(14px, 4.5cqw, 20px) clamp(10px, 3cqw, 14px) clamp(10px, 3.2cqw, 14px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 4, zIndex: 2,
      }}>
        <div style={{
          position: 'absolute', top: -14, left: '50%',
          transform: 'translateX(-50%)',
          width: 28, height: 28,
        }}>
          <img src="/assets/badge-check-colored.svg" alt="verified" style={{ width: 28, height: 28 }} />
        </div>
        <span style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 700, fontSize: 'clamp(14px, 4.4cqw, 18px)',
          lineHeight: 1.3, color: GOLD, textAlign: 'center',
        }}>Muqaddas Komilova</span>
        <span style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 400, fontSize: 'clamp(11px, 3.2cqw, 14px)',
          lineHeight: 1.4, color: '#fff', textAlign: 'center',
        }}>
          29 yillik tajribaga ega<br />modelyer konstruktor
        </span>
      </div>

      {/* Bottom gradient banner — compact */}
      <div style={{
        position: 'absolute', left: 0, top: '77.5%',
        width: '100%', height: '22.5%', overflow: 'hidden',
        background: 'linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)',
        display: 'flex', alignItems: 'flex-end', zIndex: 2,
      }}>
        <div style={{
          margin: '0 auto',
          width: '75.7%',
          borderRadius: '11px 11px 0 0',
          background: 'linear-gradient(rgb(255,255,255) 0%, rgb(153,153,153) 100%)',
          padding: 'clamp(8px, 2.6cqw, 12px) clamp(10px, 3cqw, 14px)',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(12px, 3.5cqw, 14px)',
            lineHeight: 1.2, color: 'rgb(164,112,66)',
            textAlign: 'center', margin: 0,
          }}>
            <strong style={{ fontWeight: 700 }}>5.000.000 SO'MLIK</strong> DARS,
          </p>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(12px, 3.5cqw, 14px)',
            lineHeight: 1.2, color: 'rgb(164,112,66)',
            textAlign: 'center', margin: 0,
          }}>
            2 KUN <strong style={{ fontWeight: 700 }}>YOPIQ DARSDA TEKIN</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
