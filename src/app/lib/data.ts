import { fetchApi } from "./fetchApi";
export const filteredUsersByName = async (q: any, page: number) => {
  const url = "users/all/filter?searchTerm=" + q + "&offset=" + (page - 1);
  return fetchApi({
    dataFetch: { url, method: "GET", offset: page },
  });
};

export const getOneUser = async (id: number) => {
  const url = `users/${id}`;
  return fetchApi({
    dataFetch: { url, method: "GET" },
  });
};

export const getAllUsers = async (page: number) => {
  return fetchApi({
    dataFetch: {
      url: "users/all?offset=" + (page - 1),
      method: "GET",
      offset: page,
    },
  });
};
export const getUsersActiveCount = async () => {
  return fetchApi({
    dataFetch: {
      url: "users/count",
      method: "GET",
    },
  });
};
export const changeUserState = async (id: number) => {
  return await fetchApi({
    dataFetch: {
      url: "users/" + id,
      method: "DELETE",
    },
  });
};
export const addUser = async (data: any) => {
  return await fetchApi({
    dataFetch: {
      url: "api/auth/register",
      method: "POST",
      body: data,
    },
  });
};
//products
export const filteredProductsByName = async (q: any, page: number) => {
  const url = "products/all/filter?searchTerm=" + q + "&offset=" + (page - 1);
  return fetchApi({
    dataFetch: { url, method: "GET", offset: page },
  });
};
export const getAllProducts = async (page: number, limit?: number) => {
  let url = "products/all?offset=" + (page - 1);
  if (limit) url += "&limit=" + limit;
  return fetchApi({
    dataFetch: {
      url,
      method: "GET",
      offset: page,
    },
  });
};
export const getAllNewActiveProducts = async (page: number, limit?: number) => {
  let url = "products/new?offset=" + (page - 1);
  if (limit) url += "&limit=" + limit;
  return fetchApi({
    dataFetch: {
      url,
      method: "GET",
      offset: page,
    },
  });
};
export const getAllProductsLowStock = async (page: number, limit?: number) => {
  let url = "products/lowStock?offset=" + (page - 1);
  if (limit) url += "&limit=" + limit;
  return fetchApi({
    dataFetch: {
      url,
      method: "GET",
      offset: page,
    },
  });
};
export const findBestProductSold = async () => {
  return await fetchApi({
    dataFetch: {
      url: "products/bestSeller",
      method: "GET",
    },
  });
};
export const changeProductState = async (id: number) => {
  return await fetchApi({
    dataFetch: {
      url: "products/" + id,
      method: "DELETE",
    },
  });
};
export const addProduct = async (data: any) => {
  return await fetchApi({
    dataFetch: {
      url: "products/save",
      method: "POST",
      body: data,
    },
  });
};
export const editProduct = async (id: number, data: any) => {
  return await fetchApi({
    dataFetch: {
      url: "products/" + id,
      method: "PUT",
      body: data,
    },
  });
};
//productsCategory
export const getAllProductsCategory = async () => {
  const url = "productsCategory/all";
  return fetchApi({
    dataFetch: { url, method: "GET" },
  });
};
//invoices
export const filteredInvoicessByName = async (q: any, page: number) => {
  const url = "invoices/all/filter?searchTerm=" + q + "&offset=" + (page - 1);
  return fetchApi({
    dataFetch: { url, method: "GET" },
  });
};
export const getAllInvoices = async (page: number) => {
  return fetchApi({
    dataFetch: {
      url: "invoices/all?offset=" + (page - 1),
      method: "GET",
      offset: page,
    },
  });
};

export const getOneInvoice = async (id: number) => {
  const url = `invoices/${id}`;
  return fetchApi({
    dataFetch: { url, method: "GET" },
  });
};
export const saveInvoice = async (data: any) => {
  return await fetchApi({
    dataFetch: {
      url: "invoices/save",
      method: "POST",
      body: data,
    },
  });
};
