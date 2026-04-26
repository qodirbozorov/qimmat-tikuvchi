import { GOLD } from '../constants/colors';

export function BonusCard() {
  return (
    <div className="reveal reveal-delay-2" style={{ padding: '14px 20px 0 20px' }}>
      <div style={{
        position: 'relative',
        borderRadius: 13,
        border: `1px solid ${GOLD}`,
        aspectRatio: '372 / 224',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}>
        {/* Text */}
        <div style={{
          position: 'absolute', left: '4.8%', top: '7.1%',
          width: '52.4%',
          fontFamily: "'Cormorant Unicase', serif",
          fontSize: 'clamp(24px, 7.8cqw, 32px)',
          fontWeight: 400,
          lineHeight: 1, color: '#fff', zIndex: 2,
        }}>
          Tikuv<br />moshinkasi<br />va manekin<br />
          <strong style={{ fontWeight: 700 }}>bonus</strong>
        </div>

        {/* Sewing machine image */}
        <div style={{
          position: 'absolute', right: 0, top: '7.1%',
          width: '61.3%', height: '85.7%',
          background: 'url(/assets/8d95f8fdda2e.png) center / cover no-repeat',
        }} />

        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0,
          width: '43%', height: '100%',
          background: 'linear-gradient(to right, #000 60%, transparent 100%)',
          zIndex: 1,
        }} />
      </div>
    </div>
  );
}
