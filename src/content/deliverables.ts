// 산출물 문서 본문(마크다운) + 문서 내 이미지 매핑 레지스트리.
// 문서를 추가하려면 .md 파일을 만들고 이 객체에 doc.no(키)로 등록한다.
import servicePlanningMd from './service-planning.md?raw';
import requirementsMd from './requirements-definition.md?raw';
import iaMd from './information-architecture.md?raw';
import userFlowMd from './user-flow.md?raw';
import screenMd from './screen-definition.md?raw';

import asisMain from '../assets/asis-main.png';
import asisMobile from '../assets/asis-mobile.png';
import asisHistory from '../assets/asis-history.png';
import asisSupport from '../assets/asis-support.png';
import asisSchedule from '../assets/asis-schedule.png';
import asisInquiry from '../assets/asis-inquiry.png';
import asisIa from '../assets/asis-ia-notion.png';
import tobeIa from '../assets/tobe-ia-notion.png';
import studentFlow from '../assets/student-user-flow-notion.png';
import adminFlow from '../assets/admin-user-flow-notion.png';
import screenHome from '../assets/screen-home.png';
import screenMHome from '../assets/screen-m-home.png';
import screenCourses from '../assets/screen-courses.png';
import screenMCourses from '../assets/screen-m-courses.png';
import screenSupport from '../assets/screen-support.png';
import screenMSupport from '../assets/screen-m-support.png';
import screenGallery from '../assets/screen-gallery.png';
import screenMGallery from '../assets/screen-m-gallery.png';
import screenInquiry from '../assets/screen-inquiry.png';
import screenMInquiry from '../assets/screen-m-inquiry.png';
import screenApply from '../assets/screen-apply.png';
import screenMApply from '../assets/screen-m-apply.png';

// 서비스 기획서 — AS-IS 캡처
const servicePlanningImages: Record<string, string> = {
  'asis-main.png': asisMain,
  'asis-mobile.png': asisMobile,
  'asis-support.png': asisSupport,
  'asis-history.png': asisHistory,
  'asis-schedule.png': asisSchedule,
  'asis-inquiry.png': asisInquiry,
};

// 정보구조도 — IA 다이어그램
const iaImages: Record<string, string> = {
  'asis-ia-notion.png': asisIa,
  'tobe-ia-notion.png': tobeIa,
};

// 유저플로우 — 플로우 다이어그램
const userFlowImages: Record<string, string> = {
  'student-user-flow-notion.png': studentFlow,
  'admin-user-flow-notion.png': adminFlow,
};

// 화면설계서 — 화면 캡처(모바일/데스크톱)
const screenImages: Record<string, string> = {
  'screen-m-home.png': screenMHome,
  'screen-home.png': screenHome,
  'screen-m-courses.png': screenMCourses,
  'screen-courses.png': screenCourses,
  'screen-m-support.png': screenMSupport,
  'screen-support.png': screenSupport,
  'screen-m-gallery.png': screenMGallery,
  'screen-gallery.png': screenGallery,
  'screen-m-inquiry.png': screenMInquiry,
  'screen-inquiry.png': screenInquiry,
  'screen-m-apply.png': screenMApply,
  'screen-apply.png': screenApply,
};

export type DeliverableContent = {
  markdown: string;
  images?: Record<string, string>;
};

export const deliverableContent: Record<string, DeliverableContent> = {
  '01': { markdown: servicePlanningMd, images: servicePlanningImages },
  '02': { markdown: requirementsMd },
  '03': { markdown: iaMd, images: iaImages },
  '04': { markdown: userFlowMd, images: userFlowImages },
  '05': { markdown: screenMd, images: screenImages },
};
