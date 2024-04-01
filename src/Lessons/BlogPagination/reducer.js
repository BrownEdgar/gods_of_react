export const initialState = {
  data: [],
  loading: false,
  page: 1,
  perPage: 4,
  editablePostId: null
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'set-page': return {
      ...state,
      page: payload
    }
    case 'update-post': return updatePost(state, payload)
    case 'set-edit-post': return {
      ...state,
      editablePostId: payload
    }

    case 'add-blog': return {
      ...state,
      data: [...state.data, payload]
    }
    case "get-blogs": return {
      ...state,
      data: payload
    }

    default: return state;

  }
}

const updatePost = (state, payload) => {
  const data = state.data.map(elem => {
    if (elem.id === state.editablePostId) {
      elem = { ...elem, ...payload }
    }
    return elem
  })
  return {
    ...state,
    data
  }

}
export default reducer;