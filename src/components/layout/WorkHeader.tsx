import { Mail } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { MAIL_HREF } from '../../data/freelance';

const navItems = [
  { href: '/work#before-after', label: '작업 사례' },
  { href: '/work#process', label: '진행 방식' },
  { href: '/work#deliverables', label: '받는 것' },
  { href: '/work#scope', label: '작업 범위' },
];

export function WorkHeader() {
  return (
    <header className="site-header work-header">
      <a className="brand" href="/work" aria-label="외주 작업 소개 홈">
        <img src={logo} alt="" />
      </a>
      <nav aria-label="작업 소개 내비게이션">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={MAIL_HREF}>
        <Mail size={16} />
        이메일 문의
      </a>
    </header>
  );
}
