class Product {
  _id: string;
  name: string;
  details: string;
  image: string;
  price: string;
  company: string;
}

export class Company {
  _id: string;
  name: string;
  products: Array<Product>;
  // constructor(public name: string) {}
}
