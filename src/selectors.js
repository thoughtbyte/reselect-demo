import { createSelector } from 'reselect';

const getList = state => state.list;

export const getDerivedList = createSelector(
  [getList],
  (list) => list.map(item => item.toUpperCase())
);