export interface DataProps {
  title: string;
  city: string;
  content: string;
  startDate: string;
  endDate: string;
  count: number;
  latitude: number;
  longitude: number;
  tag: string;
  commentCnt: number;
}

export interface PlanProps {
  day: number;
  content: string;
}

export interface ImageProps {
  id: number;
  path: string;
  sequence: number;
}
