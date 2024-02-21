import { auth } from "@/app/auth";

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
export const changeUserState = async (id: number) => {
  return await fetchApi({
    dataFetch: {
      url: "users/" + id,
      method: "DELETE",
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
export const getAllProducts = async (page: number) => {
  return fetchApi({
    dataFetch: {
      url: "products/all?offset=" + (page - 1),
      method: "GET",
      offset: page,
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

const fetchApi = async ({ dataFetch }: any) => {
  const { url, method, body } = dataFetch;
  const seccion: any = await auth();
  const token = seccion.user.token;
  if (!token) return { error: "No token" };
  let data: any = {};
  const urlFetch = `http://localhost:4000/${url}`;
  try {
    const response = await fetch(urlFetch, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(
        `Error here: ${response.status} - ${response.statusText}`
      );
    }
    data = await response.json();
    return data;
  } catch (error: any) {
    return { error: error.message };
  }
};
