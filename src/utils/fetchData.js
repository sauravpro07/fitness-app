

export const exerciseOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'b8f717d6ebmsh6ad480a1fc5661bp106076jsn58959630329b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



 export const youtubeOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b8f717d6ebmsh6ad480a1fc5661bp106076jsn58959630329b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData= async (url, options) =>{
   const response= await fetch(url, options);
   const data= await response.json();

  return data;
}