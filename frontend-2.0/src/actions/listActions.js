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

export const addList = (list) => {
  const data = {
    title: list.title
  }
  const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(LISTS_URL, configObj)
    .then(response => response.json())
}

