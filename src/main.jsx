import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Code2, Mail, Menu, Moon, Palette, Sparkles, Sun, X } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import './styles.css';

const projects = [
  { title: 'Bloom Finance', type: 'Web app', color: 'coral', description: 'A friendly budgeting dashboard that turns financial goals into visual progress.', tags: ['React', 'Charts'], href: '#contact' },
  { title: 'Studio North', type: 'Brand site', color: 'violet', description: 'A bold editorial site for a creative studio with smooth interactions and motion.', tags: ['JavaScript', 'CSS'], href: '#contact' },
  { title: 'Wanderlist', type: 'Mobile concept', color: 'mint', description: 'A collaborative trip planner for collecting places and building itineraries.', tags: ['UX', 'Prototype'], href: '#contact' },
  { title: 'Pulse Journal', type: 'Web app', color: 'yellow', description: 'A calm daily reflection tool designed around small, consistent habits.', tags: ['React', 'Firebase'], href: '#contact' }
];

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('rak-theme') === 'dark'); const [menu, setMenu] = useState(false); const [filter, setFilter] = useState('All'); const [sent, setSent] = useState(false);
  useEffect(() => { localStorage.setItem('rak-theme', dark ? 'dark' : 'light'); }, [dark]);
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.type === filter), [filter]);
  const submit = useCallback(e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }, []);
  return <div className={dark ? 'app dark' : 'app'}>
    <header className="nav"><a className="logo" href="#top"><span>RK</span><b>rak<span>.</span></b></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button><nav className={menu ? 'open' : ''}><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun/> : <Moon/>}</button></nav></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="dot"/> Available for select projects</div><h1>Building digital<br/><em>experiences</em> with heart.</h1><p>I’m Rak, a front-end developer and creative problem solver. I turn big ideas into websites that feel clear, playful, and memorable.</p><div className="actions"><a className="button primary" href="#work">See my work <ArrowUpRight size={18}/></a><a className="button ghost" href="#contact">Let's talk <Mail size={18}/></a></div></div><div className="hero-art"><div className="blob blob-one"/><div className="blob blob-two"/><div className="card-float"><Sparkles size={19}/><span>Good ideas<br/><strong>grow here.</strong></span></div><div className="orbit"><Code2 size={28}/></div></div></section>
      <section className="marquee"><span>Strategy</span><i>✦</i><span>Design</span><i>✦</i><span>Development</span><i>✦</i><span>Strategy</span><i>✦</i><span>Design</span></section>
      <section className="work section" id="work"><div className="section-heading"><div><p className="kicker">Selected work</p><h2>A few things I’ve made.</h2></div><Palette className="heading-icon" size={40}/></div><div className="filters">{['All','Web app','Brand site','Mobile concept'].map(f => <button className={filter === f ? 'active' : ''} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div><div className="project-grid">{visible.map((p, i) => <ProjectCard project={p} index={i} key={p.title}/>)}</div></section>
      <section className="about section" id="about"><div className="about-sticker">✦<br/><small>Curious<br/>by nature</small></div><div><p className="kicker">A little about me</p><h2>Design-minded.<br/><em>Code-powered.</em></h2><p className="about-text">I care about the details that make a product feel effortless. My favorite work lives where thoughtful design meets clean, accessible code.</p><div className="stats"><div><strong>4+</strong><span>Years creating</span></div><div><strong>28</strong><span>Projects shipped</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div></section>
      <section className="contact section" id="contact"><div><p className="kicker">Have a project in mind?</p><h2>Let’s make something<br/><em>great together.</em></h2><p className="contact-note">Tell me a little about what you’re building and I’ll get back to you soon.</p><div className="socials"><a href="mailto:hello@example.com"><Mail size={18}/> hello@example.com</a><a href="#"><Code2 size={18}/> GitHub</a><a href="#"><span>in</span> LinkedIn</a></div></div><ContactForm onSubmit={submit} sent={sent}/></section>
    </main><footer><span>© 2025 Rak</span><span>Made with curiosity <Sparkles size={14}/></span></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
