import { GOLD_DARK } from '../constants/colors';

interface ListItem {
  icon: string;
  text: string;
}

const listItems: ListItem[] = [
  { icon: '/assets/icon-dress-colored.svg',  text: 'Oqshom liboslari' },
  { icon: '/assets/icon-style-colored.svg',  text: 'Zamonaviy fasonlarni modellashtirish' },
  { icon: '/assets/icon-money-v2.svg',        text: 'Qimmatga tikish' },
  { icon: '/assets/icon-nasiya-colored.svg',  text: 'Nasiyadan qutilish' },
  { icon: '/assets/icon-chart-v2.svg',        text: '"0" dan tikuvchilik orqali daromad qilish' },
];

export function ListCard() {
  return (
    <div className="reveal reveal-delay-1" style={{ padding: '14px 20px 0 20px' }}>
      <div style={{
        borderRadius: 13,
        background: 'linear-gradient(rgb(255,255,255) 0%, rgb(153,153,153) 100%)',
        padding: '16px 18px 20px 18px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {/* Header */}
        <div>
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 700, fontSize: 'clamp(12px, 3.4cqw, 14px)',
            lineHeight: 1.4, color: GOLD_DARK,
          }}>
            YOPIQ DARSDA KO'RIB CHIQAMIZ:
          </span>
        </div>

        {/* Items */}
        {listItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              flexShrink: 0, width: 22, height: 22,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={item.icon} alt="" style={{ width: 22, height: 22, objectFit: 'contain' }} />
            </div>
            <span style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400, fontSize: 'clamp(12px, 3.4cqw, 14px)',
              lineHeight: 1.4, color: '#181818',
            }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
