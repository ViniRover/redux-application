import { Product } from './types';

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
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: Product): ReturnAddToCartType {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
}

export function addProductToCartFailed(
  productId: number
): ReturnAddToCartFailedType {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILED',
    payload: {
      productId,
    },
  };
}
