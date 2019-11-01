import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action_types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === REMOVE_ARTICLE) {
    let articlesModified = [...state.articles]
    articlesModified.splice(action.payload, 1)
    console.log("reducer", articlesModified)
    return Object.assign({}, state, {
      articles: articlesModified
    })
  
  
   
  }
  return state;
}
export default rootReducer;