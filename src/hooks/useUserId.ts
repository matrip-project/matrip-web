export const useUserId = () => {
  const userId = sessionStorage.getItem('myId');

  return userId ? parseInt(userId) : 0;
};
