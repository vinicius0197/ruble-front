import { addCategoryGroup } from '../actions/index';
import { combineReducers } from 'redux';

const InitialState = [
  {
    "id": 1,
    "category_name": "",
    "budgeted_total": 0,
    "activity": 0,
    "available": 0,
    "elements": []
  }
]

export const CategoryGroupList = (state = InitialState, action) => {
  switch(action.type) {
    case 'ADD_CATEGORY_GROUP':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  CategoryGroupList
})