import {TABLE_STATUS} from './types';

export const tableStatus = status => {
  console.log('status----------------------->', status);
  return dispatch => {
    dispatch({
      type: TABLE_STATUS,
      payload: status,
    });
  };
};
