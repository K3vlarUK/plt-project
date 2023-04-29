import { BasketActions, ProductType } from "../../helpers/types/types";
import { AddToBasketAction, RemoveFromBasketAction } from "./actions";

export const addItemToBasket = (product: ProductType): AddToBasketAction => ({
    type: BasketActions.ADD_ITEM,
    product,
})

export const removeItemFromBasket = (idToRemove: number, productToRemove: ProductType, quantity: number): RemoveFromBasketAction => ({
    type: BasketActions.REMOVE_ITEM,
    idToRemove,
    productToRemove,
    quantity,
})

export const decreaseItemQuantity = (idOfItem: number, priceOfItem: number) => ({
    type: BasketActions.DECREASE_QUANTITY,
    idOfItem,
    priceOfItem,
})

export const increaseItemQuantity = (idOfItem: number, priceOfItem: number) => ({
    type: BasketActions.INCREASE_QUANTITY,
    idOfItem,
    priceOfItem,
})