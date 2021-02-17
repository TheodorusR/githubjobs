import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const ACTIONS = {
  SEND_REQUEST : 'SEND_REQUEST',
  DATA_ACQUIRED : 'DATA_ACQUIRED',
  ERROR_OCCURED : 'ERROR_OCCURED'
}

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SEND_REQUEST:
      return {
        loading: true,
        jobs: []
      }
    case ACTIONS.DATA_ACQUIRED:
      return {
        jobs: action.payload,
        loading: false
      }
    case ACTIONS.ERROR_OCCURED:
      return {
        error: action.payload,
        loading: false,
        jobs: []
      }
    default:
      return state
  }
}

const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({
      type: ACTIONS.SEND_REQUEST
    });
    axios
      .get('https://jobs.github.com/positions.json', {
        cancelToken: cancelToken.token,
        params: {
          page: page,
          markdown: true,
          ...params
        }
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.DATA_ACQUIRED,
          payload: res.data
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
        dispatch({
          type: ACTIONS.ERROR_OCCURED,
          payload: err
        });
      })

    return () => {
      cancelToken.cancel();
    }
  }, [params, page]);

  return state;
}

export default useFetch
