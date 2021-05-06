const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`

export const fetchLists = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LISTS'})
      fetch(LISTS_URL)
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_LISTS', lists: responseJSON })
        })
    }
  }