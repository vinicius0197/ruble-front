const newCategoryGroup = {
  "id": Math.round(Math.random()*1000000), // temporary solution for random ids
  "category_name": "",
  "budgeted_total": 0.0,
  "activity": 0.0,
  "available": 0.0,
  "elements": []
};

export const addCategoryGroup = {
  type: 'ADD_CATEGORY_GROUP',
  payload: newCategoryGroup
};