import {SELECTED_ROOM} from './types';

export const selectRoom = (room) => {
    return {
        type: SELECTED_ROOM,
        payload: room,
    }
}