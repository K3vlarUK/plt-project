import {describe, expect, test} from '@jest/globals';
import { ProductType } from '../src/helpers/types/types';
import reducer from '../src/redux/basket/reducer';
import { addItemToBasket, removeItemFromBasket } from '../src/redux/basket/actionCreators';
import { createTestState } from './_lib';

describe('Testing basic reducer', () => {

    test('Item Adds to the basket', () => {
        const state = createTestState();
        const data: ProductType = {
            name: 'test item',
            id: 1,
            color: 'test color',
            price: 10,
            img: 'test img'
        }
        const action = addItemToBasket(data);
        expect(state.items.length).toStrictEqual(0);
        const newState = reducer(state, action);
        expect(newState.items.length).toStrictEqual(1);
        expect(newState.items[0].product).toStrictEqual(data);
    });
    test('Removes Item from the basket', () => {
        const state = createTestState();
        const data: ProductType = {
            name: 'test item',
            id: 1,
            color: 'test color',
            price: 10,
            img: 'test img'
        }
        const action = addItemToBasket(data);
        const newState = reducer(state, action);
        expect(newState.items.length).toStrictEqual(1);
        const removeAction = removeItemFromBasket(data.id, data, newState.items[0].quantity)
        const clearState = reducer(newState, removeAction)
        expect(clearState.items.length).toStrictEqual(0);
    });
})