export type ProjectVisualType = 'gena' | 'pipeline' | 'spec' | 'meal' | 'ops';

export type Project = {
  step: string;
  name: string;
  label: string;
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
  detail: string[];
};
