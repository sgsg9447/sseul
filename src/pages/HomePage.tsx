import { Header } from '../components/layout/Header';
import { ClosingSection } from '../sections/ClosingSection';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioFlowSection } from '../sections/PortfolioFlowSection';
import { ProblemSection } from '../sections/ProblemSection';
import { SkillsSection } from '../sections/SkillsSection';
import { WorkExperienceSection } from '../sections/WorkExperienceSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <PortfolioFlowSection />
      <SkillsSection />
      <WorkExperienceSection />
      <ClosingSection />
    </>
  );
}
