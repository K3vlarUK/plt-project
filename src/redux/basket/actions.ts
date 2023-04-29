import { BasketActions, ProductType } from "../../helpers/types/types";

export interface AddToBasketAction {
    type: BasketActions.ADD_ITEM;
    product: ProductType;
}

export interface RemoveFromBasketAction {
    type: BasketActions.REMOVE_ITEM;
    idToRemove: number;
    productToRemove: ProductType;
    quantity: number;
}

export interface DecreaseItemQuantity {
    type: BasketActions.DECREASE_QUANTITY;
    idOfItem: number;
    priceOfItem: number;
}

export interface IncreaseItemQuantity {
    type: BasketActions.INCREASE_QUANTITY;
    idOfItem: number;
    priceOfItem: number;
}

export type ActionTypes = 
| AddToBasketAction
| RemoveFromBasketAction
| DecreaseItemQuantity
| IncreaseItemQuantity;