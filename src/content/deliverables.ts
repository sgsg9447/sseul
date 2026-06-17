// 산출물 문서 본문(마크다운) + 문서 내 이미지 매핑 레지스트리.
// 문서를 추가하려면 .md 파일을 만들고 이 객체에 doc.no(키)로 등록한다.
import servicePlanningMd from './service-planning.md?raw';
import asisMain from '../assets/asis-main.png';
import asisMobile from '../assets/asis-mobile.png';
import asisHistory from '../assets/asis-history.png';
import asisSupport from '../assets/asis-support.png';
import asisSchedule from '../assets/asis-schedule.png';
import asisInquiry from '../assets/asis-inquiry.png';

// 마크다운 안의 이미지 파일명 → 실제 import된 에셋 URL
const asisImages: Record<string, string> = {
  'asis-main.png': asisMain,
  'asis-mobile.png': asisMobile,
  'asis-support.png': asisSupport,
  'asis-history.png': asisHistory,
  'asis-schedule.png': asisSchedule,
  'asis-inquiry.png': asisInquiry,
};

export type DeliverableContent = {
  markdown: string;
  images?: Record<string, string>;
};

export const deliverableContent: Record<string, DeliverableContent> = {
  '01': { markdown: servicePlanningMd, images: asisImages },
};
