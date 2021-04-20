import { ActionTypes, Product } from './types';

interface ReturnAddToCartType {
  type: string;
  payload: {
    product: Product;
  };
}

interface ReturnAddToCartFailedType {
  type: string;
  payload: {
    productId: number;
  };
}

export function addProductToCartRequest(product: Product): ReturnAddToCartType {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: Product): ReturnAddToCartType {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailed(
  productId: number
): ReturnAddToCartFailedType {
  return {
    type: ActionTypes.addProductToCartFailed,
    payload: {
      productId,
    },
  };
}
