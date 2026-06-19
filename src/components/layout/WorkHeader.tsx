import { ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { NOTION_CONTACT_URL } from '../../data/freelance';

const navItems = [
  { href: '#before-after', label: '작업 사례' },
  { href: '#process', label: '진행 방식' },
  { href: '#deliverables', label: '받는 것' },
  { href: '#scope', label: '작업 범위' },
];

export function WorkHeader() {
  return (
    <header className="site-header work-header">
      <a className="brand" href="#top" aria-label="외주 작업 소개 맨 위로">
        <img src={logo} alt="" />
      </a>
      <nav aria-label="작업 소개 내비게이션">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={NOTION_CONTACT_URL} target="_blank" rel="noreferrer">
        상담 신청
        <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
