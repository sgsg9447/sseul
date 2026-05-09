import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import logo from '../../assets/logo.svg';

const navItems = [
  { href: '#problem', id: 'problem', label: 'Problem' },
  { href: '#approach', id: 'approach', label: 'Approach' },
  { href: '#flow', id: 'flow', label: 'Projects' },
  { href: '#case', id: 'case', label: 'Case study' },
  { href: '#skills', id: 'skills', label: 'Skills' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-34% 0px -52% 0px',
        threshold: [0.08, 0.2, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="sseul home">
        <img src={logo} alt="" />
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={item.href} aria-current={activeSection === item.id ? 'page' : undefined} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:hi@sseul.studio">
        <Mail size={16} />
        Contact
      </a>
    </header>
  );
}
