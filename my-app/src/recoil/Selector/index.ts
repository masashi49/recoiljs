import { selector } from "recoil";
import { todoListState } from '../Atom'

export const todoListStatesState = selector({
    key: 'todoListStatesState',
    get: ({ get }) => {
        const length = get(todoListState).length
        return {
            todoListLength: length
        }
    }
})
