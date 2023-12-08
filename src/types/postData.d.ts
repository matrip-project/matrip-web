export interface DataProps {
  title: string;
  city: string;
  content: string;
  startDate: string;
  endDate: string;
  count: number;
  latitude: number;
  longitude: number;
  tag?: string;
  journeyCount?: number; //댓글수
  memberId?: number;
  memberAge?: number;
  memberEmail?: string;
  memberName?: string;
  memberSex?: string;
  status: string;
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

export type DataType = DataProps & ImageProps;
