import { CHANGE_ITEM } from "../types/BurgerOrderType"

export const changeItemOfBurger = (name, status) => {
    return {
        type: CHANGE_ITEM,
        payload: {name, status}
    }
}