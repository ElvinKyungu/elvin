type Experience = {
  title: string;
  image: {
    type: string;
    start: number;
    end: number;
    loc: object;
    body: string;
  };
  description: {
    type: string;
    start: number;
    end: number;
    loc: object;
    body: string;
  };
  learned: Array<string>;
  locatedCompany?: {
    img: string;
    title: string;
    description: string;
  };
};

export type ExperiencesDetails = {
  atlanticZone: Experience;
  bayamo: Experience;
  efficient: Experience;
  lushitrap: Experience;
  soixanteCircuits: Experience;
}