import { useCallback } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { CareerCompany } from '../components/career/CareerCompany';
import { careerCompanies, careerKeywords, careerSkills, careerSummary } from '../data/careerHistory';

// 출력(PDF) 페이지 구성 — 1p: 재직 이력 2곳, 2p: 인턴 경력 + 보유 역량
const firstPrintPageCompanies = careerCompanies.slice(0, 2);
const secondPrintPageCompanies = careerCompanies.slice(2);

export function CareerPage() {
  const handlePrint = useCallback(() => window.print(), []);

  return (
    <div className="career-page">
      {/*
        The résumé sets `@page { margin: 0 }` (its sheets are full-bleed A4).
        Career keeps the browser margin area at 0 to avoid default print
        headers/footers; document padding creates the visible page margins.
        Mounted only on /career, this scoped override wins while present.
      */}
      <style>{`@media print { @page { size: A4; margin: 0; } }`}</style>

      <header className="resume-toolbar">
        <a className="resume-back" href="/">
          <ArrowLeft size={16} />
          포트폴리오로
        </a>
        <p className="resume-toolbar-title">경력기술서</p>
        <button type="button" className="resume-print-all" onClick={handlePrint}>
          <Printer size={16} />
          PDF로 저장
        </button>
      </header>

      <main className="career-doc">
        <section className="career-print-page career-print-page-first" aria-label="경력기술서 1페이지">
          <div className="career-head">
            <h1 className="career-title">
              경력기술서<span>김슬기 · 서비스기획 | PM | PO</span>
            </h1>
            <p className="career-summary">{careerSummary}</p>
            <p className="career-kw">{careerKeywords}</p>
          </div>
          <div className="career-divider" />

          {firstPrintPageCompanies.map((company) => (
            <CareerCompany key={company.name} company={company} />
          ))}
        </section>

        <section className="career-print-page career-print-page-cont" aria-label="경력기술서 2페이지">
          <div className="career-print-page-body">
            {secondPrintPageCompanies.map((company) => (
              <CareerCompany key={company.name} company={company} />
            ))}

            <section className="career-skills">
              <h2>보유 역량</h2>
              <p>{careerSkills}</p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
