export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  createdAt: string;
  active: boolean;
  productId: number;
}

export const productosArray: Product[] = [
  {
    name: "Camiseta básica",
    description: "Camiseta de algodón suave",
    price: 15.99,
    stock: 50,
    image: "camiseta.jpg",
    category: "Ropa",
    createdAt: "2023-05-10",
    active: true,
    productId: 1,
  },
  {
    name: "Chaqueta de cuero",
    description: "Chaqueta de cuero genuino para hombre",
    price: 129.99,
    stock: 15,
    image: "chaqueta-cuero.jpg",
    category: "Ropa",
    createdAt: "2023-08-15",
    active: true,
    productId: 2,
  },
  {
    name: "Vestido floral",
    description: "Vestido de verano con estampado floral",
    price: 59.95,
    stock: 25,
    image: "vestido-floral.jpg",
    category: "Ropa",
    createdAt: "2023-06-20",
    active: true,
    productId: 3,
  },
  {
    name: "Zapatillas deportivas",
    description: "Zapatillas deportivas con tecnología Air Max",
    price: 149.99,
    stock: 30,
    image: "nike-air-max.jpg",
    category: "Zapatillas",
    createdAt: "2023-04-05",
    active: true,
    productId: 4,
  },
  {
    name: "Jeans ajustados",
    description: "Jeans ajustados de mezclilla para mujer",
    price: 39.99,
    stock: 40,
    image: "jeans-ajustados.jpg",
    category: "Ropa",
    createdAt: "2023-09-10",
    active: true,
    productId: 5,
  },
  {
    name: "Camisa a rayas",
    description: "Camisa de manga larga a rayas para hombre",
    price: 45.5,
    stock: 20,
    image: "camisa-rayas.jpg",
    category: "Ropa",
    createdAt: "2023-07-18",
    active: true,
    productId: 6,
  },
  {
    name: "Sudadera con capucha",
    description: "Sudadera cómoda con capucha para mujer",
    price: 34.99,
    stock: 30,
    image: "sudadera-capucha.jpg",
    category: "Ropa",
    createdAt: "2023-11-25",
    active: true,
    productId: 7,
  },
  {
    name: "Botas de senderismo",
    description: "Botas resistentes para senderismo y trekking",
    price: 89.95,
    stock: 15,
    image: "botas-senderismo.jpg",
    category: "Zapatillas",
    createdAt: "2023-10-02",
    active: true,
    productId: 8,
  },
  {
    name: "Falda plisada",
    description: "Falda elegante plisada para ocasiones formales",
    price: 55.0,
    stock: 25,
    image: "falda-plisada.jpg",
    category: "Ropa",
    createdAt: "2023-12-10",
    active: true,
    productId: 9,
  },
  {
    name: "Zapatillas Converse Chuck Taylor",
    description: "Zapatillas clásicas Converse Chuck Taylor All Star",
    price: 59.99,
    stock: 35,
    image: "converse-chuck-taylor.jpg",
    category: "Zapatillas",
    createdAt: "2023-09-28",
    active: true,
    productId: 10,
  },
];
