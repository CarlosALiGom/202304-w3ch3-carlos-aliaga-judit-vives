export interface ComponentStructure {
  element: Element;
  className: string;
}

export interface SeriesStructure extends ComponentStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  emmies: number;
}

export type Series = SeriesStructure[];
