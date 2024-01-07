import { usersArray } from "../utilities/users";
import { productsArray } from "../utilities/products";
import { Invoices, invoicesArray } from "../utilities/invoices";
export const filteredUsersByName = async (q: any, page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const filteredUsers = usersArray.filter((user) =>
    user.name.toLowerCase().startsWith(q.toLowerCase())
  );
  const obj = {
    totalPages: Math.ceil(filteredUsers.length / 5),
    userArray: filteredUsers
      .slice(offset, offset + limit)
      .filter((user) => user.name.toLowerCase().startsWith(q.toLowerCase())),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
};
export const getAllUsers = async (page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const obj = {
    totalPages: Math.ceil(usersArray.length / 5),
    userArray: usersArray.slice(offset, offset + limit),
  };
  return fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((json) => {
      return obj;
    });
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
