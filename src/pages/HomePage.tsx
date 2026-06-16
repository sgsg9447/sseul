import { Header } from '../components/layout/Header';
import { CaseStudySection } from '../sections/CaseStudySection';
import { ClosingSection } from '../sections/ClosingSection';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioFlowSection } from '../sections/PortfolioFlowSection';
import { SkillsSection } from '../sections/SkillsSection';
import { WorkExperienceSection } from '../sections/WorkExperienceSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <HeroSection />
      <CaseStudySection />
      <PortfolioFlowSection />
      <SkillsSection />
      <WorkExperienceSection />
      <ClosingSection />
    </>
  );
}
