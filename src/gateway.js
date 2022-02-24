const baseUrl = `https://rickandmortyapi.com/api`;

export const fetchCharactersData = currentPage => {
  return fetch(`${baseUrl}/character?page=${currentPage}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};

export const fetchFilteredCharactersData = (
  currentPage,
  filterKey,
  filterValue
) => {
  return fetch(
    `${baseUrl}/character?page=${currentPage}&${filterKey}=${filterValue}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};
