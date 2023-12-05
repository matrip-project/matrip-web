const getCleanDetailInfo = (data: any) => {
  delete data['createDt'];
  delete data['updateDt'];

  return data;
};

export { getCleanDetailInfo };
