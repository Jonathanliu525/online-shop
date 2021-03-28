import { Product } from '../models/products';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCFESS = 'GET_PRODUCT_SUCCFESS';

export interface GetProductAction {
  type: typeof GET_PRODUCT;
  sortBy: string;
  order: string;
  limit: number;
}
export interface GetProductActionSuccess {
  type: typeof GET_PRODUCT_SUCCFESS;
  sortBy: string;
  payload: Product[];
}

export const getProduct = (
  sortBy: string,
  order: string = 'desc',
  limit: number = 10,
): GetProductAction => {
  return {
    type: GET_PRODUCT,
    sortBy,
    order,
    limit,
  };
};

export const getProductSuccess = (
  payload: Product[],
  sortBy: string,
): GetProductActionSuccess => {
  return {
    type: GET_PRODUCT_SUCCFESS,
    sortBy,
    payload,
  };
};

export type ProductActionUnion = GetProductAction | GetProductActionSuccess;
