export const useUserId = () => {
  const userId = localStorage.getItem('myId');

  return userId ? parseInt(userId) : 0;
};
