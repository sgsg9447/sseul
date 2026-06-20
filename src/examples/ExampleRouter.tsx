import type { ReactElement } from 'react';
import { ExampleGallery } from './ExampleGallery';
import { CraftSite, CraftPdf } from './craft';
import { CoachSite, CoachPdf } from './coach';
import { CafeSite, CafePdf } from './cafe';

const routes: Record<string, () => ReactElement> = {
  '/example': ExampleGallery,
  '/example/1': CraftSite,
  '/example/1/pdf': CraftPdf,
  '/example/2': CoachSite,
  '/example/2/pdf': CoachPdf,
  '/example/3': CafeSite,
  '/example/3/pdf': CafePdf,
};

export function ExampleRouter({ path }: { path: string }) {
  const Page = routes[path] ?? ExampleGallery;
  return <Page />;
}
