import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm({ onSubmit, sent }) {
  const nameRef = useRef(null);
  return <form onSubmit={onSubmit} onFocus={() => nameRef.current?.classList.add('form-active')}>
    <label>Your name<input ref={nameRef} required placeholder="Jane Smith"/></label><label>Your email<input required type="email" placeholder="jane@example.com"/></label><label>Tell me about it<textarea required rows="4" placeholder="A few words about your project..."/></label><button className="button primary" type="submit">{sent ? 'Message ready ✓' : 'Send message'} <ArrowUpRight size={18}/></button>
  </form>;
}
