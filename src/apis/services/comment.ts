import { CommentProps } from '../../types/commentData';

const sortComment = (data: CommentProps[]) => {
  const commentMap: { [key: number]: CommentProps[] } = {};

  data.forEach((comment) => {
    const parentId = comment.parentId || 0;

    if (!commentMap[parentId]) {
      commentMap[parentId] = [];
    }

    commentMap[parentId].push(comment);
  });

  // 날짜순 정렬
  Object.keys(commentMap).forEach((key) => {
    const parentId = parseInt(key, 10);
    commentMap[parentId].sort((a, b) => {
      return new Date(a.createAt).getTime() - new Date(b.createAt).getTime();
    });
  });

  const sortedComments: CommentProps[] = [];
  const topLevelComments = commentMap[0] || [];

  topLevelComments.forEach((comment) => {
    sortedComments.push(comment);
    if (comment.id in commentMap) {
      sortedComments.push(...commentMap[comment.id]);
    }
  });

  return sortedComments;
};

export { sortComment };
