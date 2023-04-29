import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IBasketState, BasketActions, BasketItemType } from "../../helpers/types/types";
import { ActionTypes } from "./actions";

// In an ideal world I would have also set up persistance but I tried to focus on not spending too long on everything
// and getting it all into an app to show.

export const initialState: IBasketState = {
    items: [],
    totalCost: 0,
}

export const useTypedSelector: TypedUseSelectorHook<IBasketState> = useSelector;

const reducer = (state = initialState, action: ActionTypes): IBasketState => {
    let newState = state;
    switch (action.type) {
        case BasketActions.ADD_ITEM:
            newState = {...state};
            let newEntry: boolean = true;
            if (newState.items.length > 0) {
                // I tried to work with array.some but for some reason I was having issues and it was always returning false :( - need more time to look into it
                for (let index = 0; index < newState.items.length; index++) {
                    const element = newState.items[index];
                    if (element.product.id === action.product.id) {
                        newEntry = false;
                        // We have a match so no need to search any further so we don't get conflicts with matches
                        break;
                    } else {
                        newEntry = true;
                    }
                }
            }
            if (newEntry) {
                newState.items.push({
                    product: action.product,
                    quantity: 1,
                    productCost: action.product.price
                })
            } else {
                newState.items.map((basketItem: BasketItemType) => {
                    if (basketItem.product.id === action.product.id) {
                        ++basketItem.quantity;
                        basketItem.productCost += action.product.price;
                    }
                })
            }
            newState.totalCost += action.product.price;
            break;
        case BasketActions.REMOVE_ITEM:
            newState = {...state}
            const newItemsList = newState.items.filter((basketItem: BasketItemType) => basketItem.product.id !== action.idToRemove)
            newState.totalCost -= action.productToRemove.price * action.quantity;
            newState.items = newItemsList;
            break;
        case BasketActions.DECREASE_QUANTITY:
            newState = {...state}
            newState.items.map((basketItem: BasketItemType) => {
                if (basketItem.product.id === action.idOfItem && basketItem.quantity > 1) {
                    --basketItem.quantity;
                    basketItem.productCost -= action.priceOfItem;
                } else {
                    const newItemsList = newState.items.filter((basketItem: BasketItemType) => basketItem.product.id !== action.idOfItem);
                    newState.items = newItemsList;
                }
            })
            newState.totalCost -= action.priceOfItem
            break;
        case BasketActions.INCREASE_QUANTITY:
            newState = {...state}
            newState.items.map((basketItem: BasketItemType) => {
                if (basketItem.product.id === action.idOfItem) {
                    ++basketItem.quantity;
                    basketItem.productCost += action.priceOfItem;
                }
            })
            newState.totalCost += action.priceOfItem
            break;
        default:
            return state;
    }
    return newState;
}

export default reducer;