import { GOLD } from '../constants/colors';

interface CTAButtonProps {
  label: string;
  /** Optional click handler — wire up to your backend here */
  onClick?: () => void;
  className?: string;
}

export function CTAButton({ label, onClick, className = '' }: CTAButtonProps) {
  return (
    <button
      className={`cta-btn ${className}`}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'clamp(66px, 19cqw, 82px)',
        borderRadius: 12,
      }}
    >
      <span style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(14px, 4.2cqw, 18px)',
        letterSpacing: '0.02em',
        color: GOLD,
        lineHeight: 1.5,
      }}>
        {label}
      </span>
    </button>
  );
}
