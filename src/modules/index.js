import { combineReducers } from 'redux';

import pointlessBoolean from '../modules/pointless_boolean';
import list from '../modules/list';

const reselectApp = combineReducers({
  pointlessBoolean,
  list,
});

export default reselectApp;