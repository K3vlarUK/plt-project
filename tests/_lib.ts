import { IBasketState } from "../src/helpers/types/types"
import { initialState } from "../src/redux/basket/reducer"

export const createTestState = (): IBasketState => {
    return {
        ...initialState,
        items: initialState.items,
        totalCost: initialState.totalCost,
    };
}