import axios from 'axios';
import {
  ADD_ORDER_DETAIL_LIST,
  ORDER_DETAIL_INITIAL,
  SAVE_ORDER_DETAIL_LIST,
  GET_ORDER_DETAIL_LIST,
} from './types';

export const addOrderDetailList = orderDetail => {
  return dispatch => {
    dispatch({
      type: ADD_ORDER_DETAIL_LIST,
      payload: orderDetail,
    });
  };
};

export const updateOrderDetailList = (orderDetail, orderDetailList) => {
  let selectedDetails = orderDetailList.filter(item => {
    return item.productId === orderDetail.productId;
  });

  if (selectedDetails.length > 0) {
    selectedDetails[0].count = selectedDetails[0].count + orderDetail.count;
  } else {
    orderDetailList.push(orderDetail);
  }
  orderDetailList = orderDetailList.filter(item => {
    return item.count > 0;
  });
  return dispatch => {
    dispatch({
      type: ADD_ORDER_DETAIL_LIST,
      payload: orderDetailList,
    });
  };
};

export const saveOrderDetailList = (orderDetailList, user) => {
  return dispatch => {
    axios
      .post(
        'https://api.terracesarkoy.com/api/Order/UpdateOrderDetailList',
        orderDetailList,
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      )
      .then(response => {
        dispatch({
          type: SAVE_ORDER_DETAIL_LIST,
          payload: response.data.data,
        });
      });
  };
};

export const getOrderDetailList = (id, user) => {
  return dispatch => {
    axios
      .get(
        'https://api.terracesarkoy.com/api/Order/GetOrderDetailListByOrderId?orderId=' +
          id,
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      )
      .then(response => {
        dispatch({
          type: GET_ORDER_DETAIL_LIST,
          payload: response.data,
        });
      });
  };
};

export const orderDetailInitial = () => {
  return dispatch => {
    dispatch({
      type: ORDER_DETAIL_INITIAL,
    });
  };
};
