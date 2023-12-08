export interface CommentProps {
  id: number;
  parentId: number;
  journeyId: number;
  memberId: number;
  memberName: string;
  memberEmail: string;
  content: string;
  secret: boolean;
  createAt: string;
  isWriter?: boolean;
}
