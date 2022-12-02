import { CHANGE_ITEM } from "../types/BurgerOrderType";

const burgerState = { 
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 
    menu: { salad: 10, cheese: 20, beef: 55 }, 
    total: 85 
}

export const orderBurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case CHANGE_ITEM: {
            const {name, status} = action.payload;
            if (status) {
                state.burger[name] += 1;
                state.total += state.menu[name];
            } else {
                if (state.burger[name] >= 1) {
                    state.burger[name] -= 1;
                    state.total -= state.menu[name];
                } else {
                    alert("You can't. Don't joke with me!!!");
                }
            }
            state.burger = {...state.burger};
            return {...state}
        }
        default: return {...state}
    }
}