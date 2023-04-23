// Special fetchData utility function, this func
// is reused, we are making a connection w/ rapidapi
//To be used in the SearchExercises

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  // since it's fecth, we must extract the data, this is an abstraction, meaning we're going to need the url and options
  // when calling this function in components(SearchExercises.js, )
  const data = await response.json();
  console.log(data)

  return data;
};