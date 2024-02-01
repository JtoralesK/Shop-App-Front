import { productsArray } from "../utilities/products";
import { Invoices, invoicesArray } from "../utilities/invoices";
import { auth } from "@/app/auth";

export const filteredUsersByName = async (q: any, page: number) => {
  const url = "users/all/filter?searchTerm=" + q + "&offset=" + (page - 1);
  const response = fetchApi({
    dataFetch: { url, method: "GET", offset: page },
  });
  return response;
};

export const getOneUser = async (id: number, token: string) => {
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getAllUsers = async (page: number, token: string) => {
  const response = fetchApi({
    dataFetch: {
      url: "users/all?offset=" + (page - 1),
      method: "GET",
      offset: page,
      token,
    },
  });
  return response;
};
export const changeUserState = async (id: number) => {
  const response = fetchApi({
    dataFetch: {
      url: "users/" + id,
      method: "DELETE",
    },
  });
  return response;
};

//products
export const filteredProductsByName = async (q: any, page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const filteredProducts = productsArray.filter((user) =>
    user.name.toLowerCase().startsWith(q.toLowerCase())
  );
  const obj = {
    totalPages: Math.ceil(filteredProducts.length / 5),
    productsArray: filteredProducts
      .slice(offset, offset + limit)
      .filter((product) =>
        product.name.toLowerCase().startsWith(q.toLowerCase())
      ),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
};
export const getAllProducts = async (page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const obj = {
    totalPages: Math.ceil(productsArray.length / 5),
    productsArray: productsArray.slice(offset, offset + limit),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
};
//invoices
export const filteredInvoicessByName = async (q: any, page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const filteredInvoices = invoicesArray.filter((invoice: Invoices) =>
    invoice.customer.toLowerCase().startsWith(q.toLowerCase())
  );
  const obj = {
    totalPages: Math.ceil(filteredInvoices.length / 5),
    invoicesArray: filteredInvoices
      .slice(offset, offset + limit)
      .filter((invoice: Invoices) =>
        invoice.customer.toLowerCase().startsWith(q.toLowerCase())
      ),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
};
export const getAllInvoices = async (page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const obj = {
    totalPages: Math.ceil(invoicesArray.length / 5),
    invoicesArray: invoicesArray.slice(offset, offset + limit),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
};

const fetchApi = async ({ dataFetch }: any) => {
  const { url, method, body } = dataFetch;
  const seccion: any = await auth();
  const token = seccion.user.token;
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
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    data = await response.json();
  } catch (error: any) {
    console.error("Error al realizar la solicitud:", error.message);
  } finally {
    return data;
  }
};
