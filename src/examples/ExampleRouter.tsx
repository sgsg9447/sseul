import type { ReactElement } from 'react';
import { ExampleGallery } from './ExampleGallery';
import { ProSite, ProPdf } from './pro';
import { CoachSite, CoachPdf } from './coach';
import { BuildSite, BuildPdf } from './build';
import { StudioSite, StudioPdf } from './studio';
import { LessonSite, LessonPdf } from './lesson';
import { VenueSite, VenuePdf } from './venue';
import { AcademySite, AcademyPdf } from './academy';

const routes: Record<string, () => ReactElement> = {
  '/example': ExampleGallery,
  '/example/1': ProSite,
  '/example/1/pdf': ProPdf,
  '/example/2': CoachSite,
  '/example/2/pdf': CoachPdf,
  '/example/3': BuildSite,
  '/example/3/pdf': BuildPdf,
  '/example/4': StudioSite,
  '/example/4/pdf': StudioPdf,
  '/example/5': LessonSite,
  '/example/5/pdf': LessonPdf,
  '/example/6': VenueSite,
  '/example/6/pdf': VenuePdf,
  '/example/7': AcademySite,
  '/example/7/pdf': AcademyPdf,
};

export function ExampleRouter({ path }: { path: string }) {
  const Page = routes[path] ?? ExampleGallery;
  return <Page />;
}
