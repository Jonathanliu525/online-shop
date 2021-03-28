import { Product } from './../models/products';
import { GET_PRODUCT, GET_PRODUCT_SUCCFESS } from './../actions/product.action';
import { ProductActionUnion } from '../actions/product.action';

export interface ProductState {
  createdAt: {
    loaded: boolean;
    success: boolean;
    products: Product[];
  };
  sold: {
    loaded: boolean;
    success: boolean;
    products: Product[];
  };
}

const initialState: ProductState = {
  createdAt: {
    loaded: false,
    success: false,
    products: [],
  },
  sold: {
    loaded: false,
    success: false,
    products: [],
  },
};

export function productReducer(
  state = initialState,
  action: ProductActionUnion,
) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          loaded: false,
          success: false,
          products: [],
        },
      };
    case GET_PRODUCT_SUCCFESS:
      return {
        ...state,
        [action.sortBy]: {
          loaded: true,
          success: true,
          products: action.payload,
        },
      };
    default:
      return state;
  }
}
