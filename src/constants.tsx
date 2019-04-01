interface IFilter {
  filter: String;
  icon?: string;
}
interface IPrice {
  price: String;
}
export const CategoryFilter: IFilter[] = [{ filter: "All" }, { filter: "Trending" }, { filter: "Sale" }];

export const GenderFilter: IFilter[] = [{ filter: "All" }, { filter: "Man" }, { filter: "Women" }, { filter: "Boys" }, { filter: "Girls" }, { filter: "Kids" }];

export const PriceFilter: IPrice[] = [{ price: "$25" }, { price: "$50" }, { price: "$100" }, { price: "$1000+" }];
