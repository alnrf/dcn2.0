import api from "./api";

export const getOrderLists = async (token) => {
  const response = await api
    .get(`/order`, {
      headers: {
        Authorization: token,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getOrder = async (id, token) => {
  const response = await api
    .get(`/order/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};
