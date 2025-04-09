import { getProductsOnce } from "@/hooks/useProducts";
const products = await getProductsOnce();

// Calculate min and max price dynamically
const minPrice = Math.min(...products.map((product) => product.price));
const maxPrice = Math.max(...products.map((product) => product.price));

export const initialState = {
  price: [minPrice, maxPrice], 
  availability: "All",
  color: "All",
  size: "All",
  activeFilterOnSale: false,
  brands: [],
  filtered: products,
  sortingOption: "Sort by (Default)",
  sorted: products,
  currentPage: 1,
  itemPerPage: 6,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };

    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };
    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_FILTERED":
      return { ...state, filtered: [...action.payload] };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_SORTED":
      return { ...state, sorted: [...action.payload] };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: [minPrice, maxPrice], 

        availability: "All",

        color: "All",
        size: "All",

        brands: [],
        activeFilterOnSale: false,
      };
    default:
      return state;
  }
}
