export const charactersListSelector = state => {
  const characters = state.charactersData.results;
  return characters;
};

export const pageNumberSelector = state => {
  const pages = state?.charactersData?.info?.pages;
  return pages;
};
