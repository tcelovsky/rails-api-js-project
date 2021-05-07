const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`

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

export const deleteList = (id) => {
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
  return fetch(`${LISTS_URL}/${id}`, configObj)
}
