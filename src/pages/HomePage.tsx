import { Header } from '../components/layout/Header';
import { ApproachSection } from '../sections/ApproachSection';
import { CaseStudySection } from '../sections/CaseStudySection';
import { ClosingSection } from '../sections/ClosingSection';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioFlowSection } from '../sections/PortfolioFlowSection';
import { ProblemSection } from '../sections/ProblemSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <PortfolioFlowSection />
      <CaseStudySection />
      <SkillsSection />
      <ClosingSection />
    </>
  );
}
