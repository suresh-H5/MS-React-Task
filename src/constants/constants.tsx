export interface IFilter {
  label?: string;
  filter: String;
  icon?: string;
}
export interface IPrice {
  price: String;
}
export const CategoryFilter: IFilter[] = [
  { filter: "all", label: "All" },
  { filter: "trending", label: "Trending" },
  { filter: "electronics", label: "Electronics" },
  { filter: "homedecor", label: "Home Decor" },
  { filter: "lifestyle", label: "Life Style" },
];

export const GenderFilter: IFilter[] = [
  { filter: "all", label: "All", icon: "far fa-user" },
  { filter: "men", label: "Men", icon: "far fa-user" },
  { filter: "women", label: "Women", icon: "fas fa-user-nurse" },
  { filter: "kid", label: "Kids", icon: "fas fa-child" },
  { filter: "teen", label: "Teen", icon: "fas fa-user-md" },
];

export const PriceFilter: IPrice[] = [{ price: "$25" }, { price: "$50" }, { price: "$100" }, { price: "$1000" }, { price: "$1000+" }];
