import { SELECTED_MENU, DESELECTED_MENU } from './types';


export const selectMenu = (menu) => {
    return {
        type: SELECTED_MENU,
        payload: menu
    }
}

export const deselectMenu = () => {
    return {
        type: DESELECTED_MENU,
        payload: {}
    }
}
