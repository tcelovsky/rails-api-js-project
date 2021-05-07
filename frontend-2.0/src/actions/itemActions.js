const BASE_URL = "http://localhost:3000"
const LIST_ITEMS_URL = `${BASE_URL}/list_items`

// export const addList = (list) => {
//   const data = {
//     title: list.title
//   }
//   const configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(data)
//   }
//   return fetch(LISTS_URL, configObj)
//     .then(response => response.json())
// }

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
}