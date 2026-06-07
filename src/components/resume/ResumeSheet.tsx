import type { ReactNode } from 'react';
import { FileDown } from 'lucide-react';

type ResumeSheetProps = {
  id: string;
  pageNumber: number;
  totalPages: number;
  onPrint: (id: string) => void;
  children: ReactNode;
};

export function ResumeSheet({ id, pageNumber, totalPages, onPrint, children }: ResumeSheetProps) {
  return (
    <div className="resume-sheet-wrap">
      <div className="resume-sheet-actions">
        <span className="resume-sheet-tag">
          Page {pageNumber} / {totalPages}
        </span>
        <button type="button" className="resume-sheet-export" onClick={() => onPrint(id)}>
          <FileDown size={15} />이 페이지 PDF
        </button>
      </div>

      <article id={id} className="resume-sheet" aria-label={`이력서 ${pageNumber}페이지`}>
        {children}
      </article>
    </div>
  );
}
