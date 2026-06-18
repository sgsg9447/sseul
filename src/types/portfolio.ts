export type ProjectVisualType = 'gena' | 'pipeline' | 'spec' | 'meal' | 'ops';

export type Project = {
  step: string;
  name: string;
  label: string;
  /** Optional company/org handle shown next to the label (e.g. "@Genon"). */
  company?: string;
  title: string;
  summary: string;
  role: string;
  details?: string[];
  url?: string;
  linkLabel?: string;
  features: string[];
  board: {
    label: string;
    value: string;
  }[];
  visual: ProjectVisualType;
};

export type Problem = {
  project: string;
  title: string;
  body: string;
};

export type SkillRow = {
  area: string;
  title: string;
  /** Optional role badges shown next to the company/area label. */
  tags?: string[];
  detail: string[];
  /** Optional in-page anchor linking the capability to its supporting evidence. */
  evidenceHref?: string;
  evidenceLabel?: string;
};
