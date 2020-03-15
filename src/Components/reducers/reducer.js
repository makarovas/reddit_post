import {} from "../consts/consts";

const initialState = { isLoading: false, error: null, posts: [] };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS_BEGIN":
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.posts,
        isLoading: false
      };
    case "GET_POSTS_ERROR":
      return {
        ...state,
        posts: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}
