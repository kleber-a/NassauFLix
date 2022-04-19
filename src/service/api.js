import axios from 'axios';
import {cloneElement} from 'react/cjs/react.production.min';

const apiKey = 'c3dc5cb91b1c309207a60a76c5742842';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export async function postFavorite(accountId, sessionId, body) {
  try {
    const {data} = await api.post(
      `account/${accountId}/favorite?api_key=${apiKey}&session_id=${sessionId}`,
      body,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInterations(
  interation,
  type,
  accountId,
  sessionId,
  page,
) {
  try {
    const {data} = await api.get(
      `account/${accountId}/${interation}/${type}?api_key=${apiKey}&session_id=${sessionId}&page=${page}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovie(page) {
  try {
    const {data} = await api.get(
      `movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getPopularTvShows(page) {
  try {
    const {data} = await api.get(
      `tv/popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
export async function getDetails(id) {
  try {
    const {data} = await api.get(
      `movie/${id}?api_key=${apiKey}&language=pt-BR`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getCredits(id) {
  try {
    const {data} = await api.get(
      `movie/${id}/credits?api_key=${apiKey}&language=pt-BR`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getRequestToken() {
  try {
    const {data} = await api.get(`authentication/token/new?api_key=${apiKey}`);
    return data.request_token;
  } catch (error) {
    console.log('getRequestToken');
  }
}

export async function approveRequestToken(tolken) {
  try {
    const {data} = await axios.get(
      `https://www.themoviedb.org/authenticate/${tolken}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function validateToken(body) {
  try {
    const {data} = await api.post(
      `authentication/token/validate_with_login?api_key=${apiKey}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${body}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
    return data.success;
  } catch (error) {
    return error.response.data.success;
  }
}

export async function getIdAccessToken(token) {
  try {
    const {data} = await api.post(
      `authentication/session/new?api_key=${apiKey}`,
      token,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return data.session_id;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccountDetails(sessionId) {
  try {
    const {data} = await api.get(
      `account?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getChangeMovies(dateStart) {
  try {
    const {data} = await api.get(
      `movie/changes?api_key=${apiKey}&start_date=${dateStart}&page=1`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTvShow(id) {
  try {
    const {data} = await api.get(`tv/${id}?api_key=${apiKey}&language=pt-BR`);
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function getMoviesOrTv(type, page) {
  try {
    const {data} = await api.get(
      `${type}/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`,
    );
    return data.results;
  } catch (error) {
    console.warn(error);
  }
}
export async function getTvShowSeason(id, numberOfSeason) {
  try {
    const {data} = await api.get(
      `/tv/${id}/season/${numberOfSeason}?api_key=${apiKey}&language=pt-BR`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function getTvShowsRate(id, sessionId) {
  try {
    const {data} = await api.get(
      `/tv/${id}/rating?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getFavoritesTvShows(accountId, sessionId) {
  try {
    const {data} = await api.get(
      `/account/${accountId}/favorite/tv?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
}
export async function postRate(type, typeId, sessionId, body) {
  try {
    await api.post(
      `${type}/${typeId}/rating?api_key=${apiKey}&session_id=${sessionId}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.log(error.response.data);
  }
}
export async function postMovieFavoriteList(listId, sessionId, body) {
  try {
    await api.post(
      `list/${listId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getRate(accountId, sessionId) {
  try {
    const {data} = await api.get(
      `account/${accountId}/rated/movies?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFRTvShow(accountId, sessionId, name) {
  try {
    const {data} = await api.get(
      `/account/${accountId}/${name}/tv?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getFRMovies(accountId, sessionId, name) {
  try {
    const {data} = await api.get(
      `/account/${accountId}/${name}/movies?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getState(type, movieId, sessionId) {
  try {
    const {data} = await api.get(
      `${type}/${movieId}/account_states?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllRatedEvaliation(accountId, sessionId) {
  try {
    const {data} = await api.get(
      `/account/${accountId}/rated/movies?api_key=${apiKey}&session_id=${sessionId}`,
    );
    const response = await api.get(
      `/account/${accountId}/rated/tv?api_key=${apiKey}&session_id=${sessionId}`,
    );

    const total = data.total_results + response.data.total_results;

    return total;
  } catch (error) {
    console.log(error);
  }
}

export async function getList(account_id, sessionId, page) {
  try {
    const {data} = await api.get(
      `account/${account_id}/lists?api_key=${apiKey}&language=pt-BR&session_id=${sessionId}&page=${page}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getDetailsList(listId) {
  try {
    const {data} = await api.get(
      `list/${listId}?api_key=${apiKey}&language=pt-BR`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addList(lista, sessionId) {
  try {
    const {data} = await api.post(
      `list?api_key=${apiKey}&session_id=${sessionId}`,
      lista,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletList(id, sessionId) {
  try {
    const {data} = await api.delete(
      `https://api.themoviedb.org/3/list/${id}?api_key=${apiKey}&session_id=${sessionId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function removeMovieList(listId, media_id, sessionId) {
  try {
    await api.post(
      `list/${listId}/remove_item?api_key=${apiKey}&session_id=${sessionId}`,
      media_id,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default api;
