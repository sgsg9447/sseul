import { ArrowLeft } from 'lucide-react';
import { WorkHeader } from '../components/layout/WorkHeader';
import { CaseStudySection } from '../sections/CaseStudySection';
import { DELIVERABLES_HREF } from '../data/freelance';

export function WorkCasePage() {
  return (
    <div className="work-page work-case-page">
      <WorkHeader />
      <div className="work-subnav">
        <a className="work-back" href="/work">
          <ArrowLeft size={16} />
          작업 소개로
        </a>
        <span className="work-subnav-tag">대표 사례 · 목공 직업훈련기관 리뉴얼</span>
      </div>
      <main>
        <CaseStudySection deliverablesHref={DELIVERABLES_HREF} symptomsOpen />
      </main>
    </div>
  );
}
