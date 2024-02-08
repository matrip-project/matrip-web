export interface ImageProps {
  id: number;
  path: string;
  sequence: number;
}

export interface JourneyProps {
  id?: number;
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
  journeyImgRequestDtoList: ImageProps[];
}

export interface PlanProps {
  day: number;
  content: string;
}

interface DataType {
  dtoList: JourneyProps[];
  totalPage?: number;
}
