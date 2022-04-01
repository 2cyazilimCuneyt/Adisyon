import { SELECTED_PRODUCT, DESELECTED_PRODUCT } from './types';

export const selectProduct = (product) => {
    console.log('product', product)
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const deselectProduct = () => {
    return {
        type: DESELECTED_PRODUCT,
        payload: {}
    }
}

