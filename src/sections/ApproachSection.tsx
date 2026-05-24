import { FileCheck, ListChecks, MapPinned } from 'lucide-react';
import { SectionIntro } from '../components/common/SectionIntro';
import { approaches } from '../data/portfolio';

const iconMap = {
  fileCheck: FileCheck,
  mapPinned: MapPinned,
  listChecks: ListChecks,
};

export function ApproachSection() {
  return (
    <section className="section overview-section approach-section" id="approach">
      <div className="section-inner">
        <SectionIntro
          count="02"
          label="Approach"
          title={
            <>
              다시 정리하던 과정을 줄이고,
              <br />
              바로 확인하고 실행할 수 있는 흐름으로 바꿨습니다.
            </>
          }
          body={
            <span className="approach-lines">
              <span>종이 수강신청서는 온라인 접수와 PDF 저장 흐름으로,</span>
              <span>방문 전 알기 어려웠던 웨이팅 현황은 확인 경로 정리로,</span>
              <span>막연한 아이디어는 체크리스트와 개발 TODO로 바꿨습니다.</span>
            </span>
          }
        />
        <div className="approach-grid">
          {approaches.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <article className="approach-card" key={item.title}>
                <span className="icon-wrap">
                  <Icon size={22} />
                </span>
                <small>
                  Step {String(index + 1).padStart(2, '0')} · {item.project}
                </small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
