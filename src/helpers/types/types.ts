export interface ProductType{
    id: number,
    color: string,
    name: string,
    price: number,
    img: string,
}

export interface ChildContent {
    name: string,
    categories: string[],
}

export interface MenuType {
    name: string,
    img: string,
    children: ChildContent[],
}

export interface BasketItemType {
    product: ProductType,
    quantity: number,
    productCost: number,
}

export interface IBasketState {
    items: BasketItemType[],
    totalCost: number,
}

export enum BasketActions {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
}