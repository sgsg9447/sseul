import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import logo from '../../assets/logo.svg';

const navItems = [
  { href: '#top', id: 'top', sectionId: 'top', label: 'About' },
  { href: '#case-study', id: 'case-study', sectionId: 'case-study', label: 'Case Study' },
  { href: '#projects', id: 'projects', sectionId: 'flow', label: 'Projects' },
  { href: '#skills', id: 'skills', sectionId: 'skills', label: 'Capabilities' },
  { href: '#experience', id: 'experience', sectionId: 'experience', label: 'Experience' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    // Map each nav item to its actual <section> element, plus the contact section.
    const tracked = [
      ...navItems.map((item) => ({ id: item.id, sectionId: item.sectionId })),
      { id: 'contact', sectionId: 'contact' },
    ];

    const updateActiveSection = () => {
      // The active section is the last one whose top has scrolled past 40% of
      // the viewport — i.e. the section you're actually looking at.
      const line = window.innerHeight * 0.4;
      let current = tracked[0].id;

      for (const item of tracked) {
        const section = document.getElementById(item.sectionId);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= line) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
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
      <a className="header-cta" href="#contact" aria-current={activeSection === 'contact' ? 'page' : undefined}>
        <Mail size={16} />
        Contact
      </a>
    </header>
  );
}
