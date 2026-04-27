import { useState, useEffect, useRef } from 'react';
import { GOLD } from '../constants/colors';

interface Country {
  code: string;
  flag: string;
  name: string;
  dial: string;
  format: string;
  digits: number;
}

const countries: Country[] = [
  { code: 'UZ', flag: '🇺🇿', name: "O'zbekiston", dial: '+998', format: 'xx-xxx-xx-xx', digits: 9 },
  { code: 'RU', flag: '🇷🇺', name: 'Rossiya', dial: '+7', format: 'xxx-xxx-xx-xx', digits: 10 },
  { code: 'KZ', flag: '🇰🇿', name: "Qozog'iston", dial: '+7', format: 'xxx-xxx-xx-xx', digits: 10 },
  { code: 'TJ', flag: '🇹🇯', name: 'Tojikiston', dial: '+992', format: 'xx-xxx-xx-xx', digits: 9 },
  { code: 'US', flag: '🇺🇸', name: 'AQSH', dial: '+1', format: 'xxx-xxx-xx-xx', digits: 10 },
];

function formatPhone(raw: string, format: string): string {
  let result = '';
  let di = 0;
  for (const ch of format) {
    if (di >= raw.length) break;
    if (ch === 'x') {
      result += raw[di++];
    } else {
      result += ch;
    }
  }
  return result;
}

interface Props {
  onClose: () => void;
  onSuccess: (name: string, phone: string) => void;
}

export function RegistrationModal({ onClose, onSuccess }: Props) {
  const [name, setName] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [country, setCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  const phoneFormatted = formatPhone(phoneRaw, country.format);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, country.digits);
    setPhoneRaw(digits);
    setPhoneError('');
  };

  const handleCountrySelect = (c: Country) => {
    setCountry(c);
    setPhoneRaw('');
    setDropdownOpen(false);
  };

  const handleSubmit = () => {
    let valid = true;

    if (name.trim().length < 3) {
      setNameError("Ism kamida 3 belgi bo'lishi kerak");
      valid = false;
    } else {
      setNameError('');
    }

    if (phoneRaw.length < country.digits) {
      setPhoneError("Raqamni to'liq kiriting");
      valid = false;
    } else {
      setPhoneError('');
    }

    if (!valid) return;

    const fullPhone = country.dial + phoneRaw;
    onSuccess(name.trim(), fullPhone);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="modal-overlay" onKeyDown={handleKeyDown}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: -44,
            right: 0,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Cormorant Unicase', serif",
          fontWeight: 600,
          fontSize: 'clamp(22px, 6.5cqw, 28px)',
          color: GOLD,
          textAlign: 'center',
          margin: 0,
        }}>
          Ro'yxatdan o'tish
        </h2>

        {/* Name */}
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 6,
          }}>Ism</label>
          <input
            className="modal-input"
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={e => { setName(e.target.value); setNameError(''); }}
            autoFocus
          />
          {nameError && <span className="modal-error">{nameError}</span>}
        </div>

        {/* Phone */}
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 6,
          }}>Telefon raqami</label>
          <div style={{ display: 'flex', gap: 8 }}>
            {/* Country selector */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="modal-input"
                style={{
                  width: 'auto',
                  minWidth: 100,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  padding: '14px 12px',
                }}
              >
                <span style={{ fontSize: 18 }}>{country.flag}</span>
                <span style={{ color: '#fff', fontSize: 16 }}>{country.dial}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 2 }}>
                  <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: 4,
                  background: 'rgb(25,25,25)',
                  border: `1px solid rgba(225,176,133,0.3)`,
                  borderRadius: 10,
                  overflow: 'hidden',
                  zIndex: 10,
                  minWidth: 200,
                }}>
                  {countries.map(c => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        padding: '12px 14px',
                        background: c.code === country.code ? 'rgba(225,176,133,0.1)' : 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#fff',
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 16,
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{c.flag}</span>
                      <span>{c.name}</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', marginLeft: 'auto' }}>{c.dial}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone input */}
            <input
              className="modal-input"
              type="tel"
              placeholder={country.format}
              value={phoneFormatted}
              onChange={handlePhoneChange}
              style={{ flex: 1 }}
            />
          </div>
          {phoneError && <span className="modal-error">{phoneError}</span>}
        </div>

        {/* Submit */}
        <button
          className="cta-btn"
          onClick={handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 56,
            borderRadius: 12,
          }}
        >
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '0.02em',
            color: GOLD,
          }}>
            RO'YXATDAN O'TISH
          </span>
        </button>
      </div>
    </div>
  );
}