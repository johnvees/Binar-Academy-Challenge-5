export const setLoading = status => {
  return {
    type: 'SET_LOADING',
    status,
  };
};

export const setRefreshing = refresh => {
  return {
    type: 'SET_REFRESHING',
    refresh,
  };
};
