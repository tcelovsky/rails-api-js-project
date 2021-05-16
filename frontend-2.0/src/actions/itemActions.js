const BASE_URL = "http://localhost:3000"
const LIST_ITEMS_URL = `${BASE_URL}/list_items`

export const addItem = (item) => {
  const data = {
    content: item.content,
    list_id: item.list_id
  }
  const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(LIST_ITEMS_URL, configObj)
    .then(response => response.json())
}

export const editItem = (item) => {
  const data = {
    content: item.content,
    id: item.id,
    list_id: item.list_id
  }
  const configObj = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  return (dispatch) => {
    fetch(`${LIST_ITEMS_URL}/${item.id}`, configObj)
      .then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'EDIT_ITEM', items: responseJSON })
      })
  }
}

export const deleteItem = (id) => {
  const data = {
    id: id
  }
  const configObj = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(`${LIST_ITEMS_URL}/${id}`, configObj)
    .then(response => response.json())
}

