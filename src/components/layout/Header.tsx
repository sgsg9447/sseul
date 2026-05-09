import { Mail } from 'lucide-react';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="sseul home">
        <img src={logo} alt="" />
      </a>
      <nav aria-label="Main navigation">
        <a href="#problem">Problem</a>
        <a href="#approach">Approach</a>
        <a href="#flow">Projects</a>
        <a href="#case">Case study</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="header-cta" href="mailto:hi@sseul.studio">
        <Mail size={16} />
        Contact
      </a>
    </header>
  );
}
