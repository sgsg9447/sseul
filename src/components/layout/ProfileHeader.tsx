import { Mail } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { MAIL_HREF } from '../../data/profile';

const navItems = [
  { href: '/profile#samples', label: '작업물' },
  { href: '/profile#process', label: '진행 방식' },
  { href: '/profile#tiers', label: '상품·가격' },
  { href: '/profile#faq', label: '자주 묻는 질문' },
];

export function ProfileHeader() {
  return (
    <header className="site-header pf-header">
      <a className="brand" href="/profile" aria-label="이력서·포트폴리오 제작 소개 홈">
        <img src={logo} alt="" />
      </a>
      <nav aria-label="제작 소개 내비게이션">
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
