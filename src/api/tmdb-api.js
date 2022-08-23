export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getTvGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  };

    //adding API to get Top Rated Movies
    export const getTopRatedMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };
  
  
    //adding API to get Popular Movies
    export const getPopularMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };
  
    //adding API to get Cast
    export const getCast = (args) => {
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };

    export const getTvCast = async (args) => {
      const [prefix, { id }] = args.queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };
    
  
    export const getCastImage = async ( args ) => {
      console.log(args)
      // eslint-disable-next-line no-unused-vars
      const [prefix, { id }] = args.queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };
  
    export const getActor = async ( args ) => {
      console.log(args)
      // eslint-disable-next-line no-unused-vars
      const [prefix, { id }] = args.queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };

//adding API to retrieve Similar Movies
export const getSimilarMovies = async ( args ) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
}; 

export const getPersonDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  return response.json();
};
    
export const getTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/tv/?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getTvImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getTvShow = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };

  export const reviewContent = async (category, id, rating) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${category}/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          value: rating,
        }),
      }
    );
  };