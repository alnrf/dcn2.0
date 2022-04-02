import api from "./api";
import { getDevice } from "../utils/device";

export const getCategory = async () => {
  const response = await api
    .get(`/product/category?page=0&limit=0&show_home=true`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getProductList = async () => {
  const response = await api
    .get(`/product?page=1&limit=10`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getProductDetail = async (id) => {
  const response = await api
    .get(`/product/${id}`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getCategoryProducts = async (category) => {
  const response = await api
    .get(`/product?page=1&limit=100&category_seo_url=${category}`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const login = async (email, password) => {
  const { type, model, os } = getDevice();

  let params = {
    username: email,
    password: password,
    device: {
      type,
      model,
      os,
    },
  };
  const response = await api.post(`/customer/auth`, params);

  return response.data;
};

export const reset = async (email) => {
  let params = {
    email_address: email,
  };
  const response = await api.post(`/customer/password/reset`, params);

  return response.data;
};

export const getCustomer = async (accessToken) => {
  const response = await api
    .get(`/customer`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getSettings = async () => {
  const response = await api
    .get(`/shop/setting`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const socialLogin = async (code, type) => {
  let params = {
    code: code,
    social_type: type,
  };
  const response = await api
    .post(`/shop/setting`, params)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const updateCustomer = async (payload, accessToken) => {
  const response = await api
    .put(`/customer`, payload, {
      headers: {
        Authorization: accessToken,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const addAddress = async (payload, accessToken) => {
  const response = await api
    .post(`/customer/address`, payload, {
      headers: {
        Authorization: accessToken,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const editAddress = async (id, payload, accessToken) => {
  const response = await api
    .put(`/customer/address/${id}`, payload, {
      headers: {
        Authorization: accessToken,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const deleteAddress = async (id, accessToken) => {
  const response = await api
    .delete(`/customer/address/${id}`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getZipCode = async (zipcode) => {
  const response = await api.get(`/shop/zipcode-address/${zipcode}`);

  return response.data;
};

export const searchProduct = async (product) => {
  const response = await api
    .get(`/product?page=1&limit=100&title=${product}`)
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
};

export const getDeliverySchedule = async (merchant_id) => {
  const response = await api.get(
    `/order/delivery-options?merchant_id=${merchant_id}`
  );
  return response.data;
};

export const checkProducts = async (ids) => {
  const response = await api.get(`/product/check?ids=${ids}`);
  return response.data;
};
