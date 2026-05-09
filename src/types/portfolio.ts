export type ProjectVisualType = 'spec' | 'meal' | 'ops';

export type Project = {
  step: string;
  name: string;
  label: string;
  title: string;
  summary: string;
  role: string;
  features: string[];
  board: {
    input: string;
    output: string;
    automation: string;
  };
  visual: ProjectVisualType;
};

export type Problem = {
  title: string;
  body: string;
};

export type Approach = {
  icon: 'blocks' | 'clipboardCheck' | 'workflow';
  title: string;
  body: string;
};

export type CaseStep = {
  step: string;
  title: string;
  body: string;
};

export type SkillRow = {
  area: string;
  detail: string;
};
